<!-- Managed by `donobu skills install`. Edits are overwritten on the next install. -->

# Authoring Donobu Tests

A Donobu test IS a Playwright test. `@donobu/test` re-exports Playwright's
API (`test`, `expect`, `defineConfig`, `devices`, …) and extends exactly one
thing: the `page` fixture becomes a `DonobuExtendedPage`, which adds `page.ai`
and a few helpers. Everything you know about Playwright applies unchanged;
this document covers only the Donobu delta.

```ts
import { test } from '@donobu/test';

test('Shopper can browse to a product', async ({ page }) => {
  await page.goto('https://app.acme.com');
  await page.ai('Assert that the page has loaded and shows the product catalog');
  await page.ai('Click the first product card in the catalog');
  await page.ai('Assert that a product detail page is shown');
});
```

## The `page.ai` toolkit

Six operations, freely mixable with native Playwright calls in one test:

- **`page.ai(instruction, options?)`** (alias `page.ai.act`) — an autonomous
  AI agent drives the page to satisfy the instruction, using a default tool
  pack (click, inputText, scrollPage, goToWebpage, assert, inputFaker,
  inputRandomizedEmailAddress, handleBrowserDialog, …). Pass
  `{ schema: z.object({...}) }` to get typed structured data back. Options:
  `allowedTools` (restrict the pack), `maxToolCalls` (default 50), `envVars`
  / `envVals`, `cache`, `gptClient`.
- **`page.ai.assert(text, options?)`** — AI judges the assertion from the
  viewport screenshot, page text, URL, and title. `{ retries, retryDelaySeconds }`
  re-capture fresh context per attempt, letting dynamic UIs settle.
- **`page.ai.locate(description)` → `Locator`** — resolves natural language
  to a real Playwright locator (screenshot + pruned DOM, iframes included;
  candidate disambiguation via `.nth()`). Compose it with anything
  Playwright: `await (await page.ai.locate('The submit button')).click()`.
- **`page.ai.extract(schema, { instruction? })`** — structured data from the
  current page. Extraction results are never cached — every call is a live
  AI read; the extracted object is persisted as the flow result.
- **`page.ai.within(subject)`** — scope `assert`/`locate`/`extract` to a
  region. See below.
- **`page.ai.analyzePageText(analysis, { additionalContext? })`** — a
  natural-language report over the page's raw text.

Native and AI steps interleave naturally in one test. Picking the surface:

| Need                                        | Reach for                          |
| ------------------------------------------- | ---------------------------------- |
| Exact value, URL, visibility, count         | Playwright `expect`                |
| Stable, known element                       | Playwright locator                 |
| Selector likely to drift, intent stable     | `page.find(sel, { failover })`     |
| Element you can only describe               | `page.ai.locate('…')` → `Locator`  |
| Adaptive multi-step interaction             | `page.ai('…')`                     |
| Structured data off the page                | `page.ai.extract(schema)`          |
| Semantic or visual judgment                 | `page.ai.assert('…')`              |
| Judgment confined to one region             | `page.ai.within(…).assert('…')`    |

```ts
const cell = await page.ai.locate('The price cell in the Total row');
expect(await cell.textContent()).toBe('$51.00');
await page.ai.assert('The publish button is visible and enabled', {
  retries: 3,
  retryDelaySeconds: 2,
});
```

Instruction shape (each call is one cached, replayable unit): give each
`page.ai` call one coherent user goal, split unrelated intents into separate
calls, and narrow `allowedTools` on flows where a wrong side-path is costly.
Stable literal test data is fine inside an instruction; values that vary per
run or per environment belong in `{{$.env.NAME}}` placeholders (below).

## Scoping with `within`

`page.ai.within(subject)` makes the subject an **evidence boundary**: the AI
judges only from the subject's rendered box and DOM subtree, so content
elsewhere on the page cannot cause a pass. Cached replays are rooted at the
subject too.

```ts
// Locator subject
await page.ai
  .within(page.locator('form#login'))
  .assert('The region contains a username field, a password field, and a login button.');

// Description subject — sugar for locate-then-scope; rides the locate
// cache, making it the most cache-stable form.
await page.ai.within('the page footer').assert('The region credits Elemental Selenium.');

// Nesting: the INNERMOST subject is the evidence boundary; outer levels
// only steer its resolution. Handles are immutable and branchable.
const sidebar = page.ai.within('the sidebar');
await sidebar.within('the filters section').assert('shows 3 filters');
await sidebar.within('the cart summary').assert('shows 2 items');

// Scoped extract — read one instance of a repeated component.
const row = await page.ai.locate('The row for user Frank');
const fields = await page.ai
  .within(row)
  .extract(z.object({ status: z.string(), due: z.string() }));
```

Rules that matter:

- Subjects follow Playwright conventions — auto-wait for visibility,
  strictness error on multiple matches — enforced at every nesting level
  *before* any AI cost.
- Pass page-rooted locators (`page.locator('.filters')`); the region scopes
  them via locator-in-locator chaining. Do **not** pre-scope the locator to
  the region yourself.
- Locators returned by `page.ai.locate` rebase structurally (iframes
  included) — pass them **unmodified**; deriving them (`.first()`,
  `.filter()`, …) breaks structural rebasing. Narrow with another
  `within(...)` level instead.
- Content painted over the region (modals, toasts) is measured and disclosed
  to the AI; a materially occluded region bypasses cached steps and
  re-judges live.

## Determinism and the cache

The economic model: the **first** run of an AI step costs LLM tokens and
minutes; subsequent runs replay from cache — deterministic and LLM-free.
Cache files live at `.cache-lock/<spec-file>.cache.js` next to each spec.
They are generated, human-readable, and **meant to be committed** (the
scaffolded `.gitignore` deliberately does not exclude them).

- `page.ai` caches the successful tool calls, keyed by { hostname,
  instruction verbatim, schema, allowedTools, maxToolCalls }. URL paths and
  query strings do not split the key — only the hostname does.
- `page.ai.assert` caches as **structured Playwright `expect()` steps** (the
  AI writes the equivalent deterministic assertion; replays execute it with
  no AI involved, and reports show exactly what was checked). Keyed by
  { hostname, assertion verbatim, scope chain }. Scoped and unscoped entries
  never cross-match; refactoring a subject expression re-incurs one live run.
- Parameterize with env vars instead of editing strings:
  `{{$.env.NAME}}` placeholders in instructions/assertions are preserved in
  the cache — **names** are part of the identity, **values** are substituted
  at replay. Changing a value reuses the cache; rewording the instruction
  does not. Names referenced in the instruction are allow-listed
  automatically; substitution happens at tool-execution time, after the
  model has decided — the model and the cache only ever see the
  placeholder, so secret values never enter model context.

```ts
// Never: a new cache key per value, and the secret reaches the model.
await page.ai(`Log in as ${process.env.TEST_USER_EMAIL}`);

// Instead: one stable key; the value is injected when the tool executes.
await page.ai(
  'Log in as {{$.env.TEST_USER_EMAIL}} with password {{$.env.TEST_USER_PASSWORD}}',
);

// Non-env parameterization: bind explicit values for this invocation.
const INSTRUCTION = 'Click the {{$.env.NAV}} link in the navigation';
await page.ai(INSTRUCTION, { envVals: { NAV: 'contact' } });
```

- Opt out per call with `{ cache: false }`; clear per run with
  `donobu test --clear-ai-cache` (this changes behavior and cost, not just
  speed); invalidate a single entry by deleting it from the cache file.

## Objectives: JSDoc becomes test intent

A JSDoc comment immediately above `test(...)` is imported as the test's
**overall objective** — persisted with every result, shown in reports, and
fed to failure triage's semantic-intent analysis (it steers heal-vs-bug
classification, so phrase it as a flexible goal rather than a rigid script):

```ts
/**
 * Verifies that the storefront landing page shows its navigation bar.
 */
test('Landing page nav', async ({ page }) => {
  await page.goto('https://app.acme.com');
  await page.ai('Assert that there is a navigation bar on the page');
});
```

Rules: only the comment directly preceding the statement counts, it must be
`/** … */` (not `//` or `/* … */`), and text from the first `@tag` onward is
ignored. An explicit annotation always wins over JSDoc:

```ts
test('Checkout', {
  tag: ['@checkout'],
  annotation: [
    { type: 'objective', description: 'Complete a purchase with a saved card' },
    { type: 'ENV', description: 'CHECKOUT_USER' }, // allow-list an env var
  ],
}, async ({ page }) => { … });
```

`tag` and `annotation` are standard Playwright `TestDetails`; Donobu assigns
meaning to the `objective` and `ENV` annotation types. Env-var names used as
`{{$.env.X}}` in an **annotation** objective are allow-listed automatically;
JSDoc prose is deliberately not scanned.

## Config: the Playwright seam

`defineConfig` is Playwright's, unchanged. The Donobu-specific parts of a
canonical `playwright.config.ts`:

```ts
import { defineConfig, devices } from '@donobu/test';

export default defineConfig({
  testDir: './tests',
  use: { screenshot: 'on', video: 'on' },
  reporter: [
    ['@donobu/test/reporter/html'],
    ['@donobu/test/reporter/markdown'],
    ['@donobu/test/reporter/slack'], // posts when DONOBU_SLACK_WEBHOOK_URL is set
  ],
});
```

The Donobu reporters are opt-in package subpath exports — without them you
get only Playwright's own reporting. Donobu reads three `metadata` keys:
`autoHeal: false` on a project opts its tests out of auto-healing,
`visualCueDurationMs` tunes action highlighting, and
`SELF_HEAL_TESTS_ENABLED` gates legacy V1 healing. Playwright `projects`,
`dependencies`, `retries`, and timeouts all work normally and interact with
Donobu (e.g. retried attempts carry `provenance.attempt`).

## Models

AI steps need a model. Resolution priority: `BASE64_GPT_CONFIG` →
`DONOBU_API_KEY` (Donobu-hosted models; also enables cloud persistence —
outranks all BYO keys) → AWS Bedrock (`AWS_BEDROCK_MODEL_NAME` + AWS creds)
→ `ANTHROPIC_API_KEY` → `GOOGLE_GENERATIVE_AI_API_KEY` → `OPENAI_API_KEY` →
Ollama (`OLLAMA_MODEL_NAME`). Each provider's `*_MODEL_NAME` var overrides
its default model. Per-test or per-call overrides:

```ts
import { test, anthropicClientFixture } from '@donobu/test';
test.use({ gptClient: anthropicClientFixture('claude-sonnet-4-5') });
// …or per call: await page.ai('…', { gptClient: someClient });
```

## Beyond `page.ai`

- **`page.audit({ url?, accessibility?, consoleErrors?, … })`** — one-call
  page quality audit: full load (spinners awaited), accessibility scan,
  duplicate `id`/`data-testid` detection, console errors, failed network
  requests. It navigates or reloads, so run it before interacting.
  ```ts
  const report = await page.audit({ url: 'https://example.com' });
  expect(report.passed).toBe(true);
  ```
- **`page.runAccessibilityTest()`** — just the axe-core scan.
- **`page.find(selector, { failover: [...] })`** — a selector with ordered
  fallbacks tried when the primary goes stale.
- **`page.changeTab(urlOrSubstring)`** — returns the matching open tab as a
  `DonobuExtendedPage`.
- **`page.run(toolName, params?)`** — invoke a Donobu tool (including custom
  plugin tools) directly.
- **`page.tbd()`** — interactive authoring: pauses the test, opens a live
  session where you (or an AI instruction) drive the page, then **replaces
  the `await page.tbd()` line in the source file** with the equivalent
  recorded code when the test ends.
- **Authenticated state**: `getBrowserStorageStateFixture('<flow name or ID>')`
  (from `@donobu/test`) sources Playwright `storageState` from a previously
  recorded flow's browser state.

## What the fixture does on its own

Every test automatically persists a full result (the record `donobu results
show` reads): flow metadata with provenance, per-step screenshots, native
Playwright step tree, AI invocation records with cache-hit badges, logs,
video (when your config enables it), browser state, and — on failure —
triage evidence and a treatment plan. Author nothing for any of this; see
`references/debugging.md` for consuming it.
