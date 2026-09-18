<!-- Managed by `donobu skills install`. Edits are overwritten on the next install. -->

# Test Cases

A test case is one testable behavior in the account's inventory on
donobu.com: a `slug` (the ID), a `title`, a markdown `description`, an
optional `section` (shown as "Module"), and a `priority` of `low`,
`medium`, `high`, or `critical`. A case states what should work. A test
proves it.

Cases live only in Donobu Cloud. `donobu cases` needs `DONOBU_API_KEY` (or
`DONOBU_PERSISTENCE_API_KEY`) and stops with that advice when neither is
set; there is no local test-case store to fall back to. `npx donobu status`
prints the cloud identity answering for the account.

## The link: the slug IS the test's tag

A test is linked to a case when the test's Playwright tags contain
`@<slug>`. That is the whole convention. The match ignores case, and every
character a slug may hold is legal in a tag, so write the tag as the slug
verbatim:

```ts
import { test } from '@donobu/test';

/**
 * Guest checkout completes end to end.
 */
test(
  'Guest checkout completes end to end',
  { tag: ['@checkout-guest'] },
  async ({ page }) => {
    await page.goto('https://app.example.com');
    await page.ai('Add the first product to the cart and open the cart');
    await page.ai.assert('The cart shows 1 item');
    await page.ai('Check out as a guest with {{$.env.GUEST_EMAIL}}');
    await page.ai.assert('An order confirmation number is shown');
  },
);
```

`tag` is Playwright's own `TestDetails` field, and the JSDoc line above the
test becomes the objective (the case title reads well there). Every run
mirrors `testInfo.tags` onto the test record, so the tag reaches Donobu on
its own. No extra command files the test against the case.

Donobu derives the link from the tag on its side. Once it has, `npx donobu
cases show <slug>` lists the test under `Linked tests` with source `tag`.
When the test is not listed yet, the tag sync has not run. Wait for the
next sync instead of reaching for `cases link`: `cases link` is for one-off
links no tag expresses (source `manual`), a tag-derived link that you
`cases unlink` comes back at the next sync while the tag still matches, and
unlinking for good means removing the tag or renaming the slug.

## The description template

Every writer uses the same three headings, so an agent, a Studio run, and a
person read one shape:

```markdown
## Preconditions

- Signed in as a shopper with an empty cart

## Steps

1. Open the catalog and add the first product to the cart
2. Open the cart

## Expected result

- The cart shows 1 item
- The cart total equals the price shown in the catalog
```

The headings are a convention, not a validation rule: the API stores the
description as free markdown.

## Workflow A: automate an existing case

1. **Read the case.** `npx donobu cases show checkout-guest --json` returns
   the title, description, section, priority, and the tests already linked.
2. **Write the spec.** Tag it `@<slug>`, put the case title in the JSDoc
   objective, mirror each `## Steps` line with a `page.ai` step and each
   `## Expected result` line with a `page.ai.assert`. Secrets and
   per-environment values go in `{{$.env.NAME}}` placeholders (see
   `references/authoring.md`).
3. **Run it.** `npx donobu test -g "Guest checkout completes end to end"`.
4. **Confirm.** `npx donobu cases show checkout-guest` lists the linked
   test once the link is derived; `npx donobu results list --test "Guest
   checkout completes end to end"` shows how it did.

## Workflow B: accept Donobu's proposals, then draft the rest

Donobu already proposes test cases for an app as it learns it. Start there:
accepting a proposal costs one command and the case arrives written in the
template above, so only the behaviors Donobu did not propose need drafting
by hand.

### 1. Read the proposals

```bash
npx donobu context proposals            # ID, KIND, TITLE, PAGE, STATUS
```

Each row is a proposed test case Donobu derived from what it knows about the
app. `--status validated` narrows the list to the ones Donobu has already
run green; `--status all` adds the ones in flight and the ones already
accepted. The app is the project's own (`DONOBU_APP_ORIGIN`,
`.donobu/config.json`, or a sole committed context export); pass an origin
to name another one. Proposals live in Donobu Cloud, so this needs
`DONOBU_API_KEY`.

An empty list means Donobu has not learned the app yet. Ask the user to
explore it in Donobu Studio (Apps, then Explore), or capture from a run with
`npx donobu test --product-context=full`, then read the list again.

### 2. Accept the ones worth keeping

```bash
npx donobu cases accept prop_8f21
npx donobu cases accept prop_9c04 --priority high --section "Payments > Cart"
```

Accept one proposal at a time, and only the ones the team would actually
want tested. The defaults are Donobu's:

- **Slug** comes from the proposal's own slug hint (a short page-plus-behavior
  id like `cart-total-matches-catalog`), or is derived from the page and the
  title when it has none, with a numeric suffix if that slug is taken.
  `--slug` overrides it.
- **Description** is the proposal's preconditions, steps, and expected
  results rendered into the template above.
- **Module** is left blank. The website batch-edits it, and `--section` sets
  it here.
- **Priority** is the proposal's own, else `medium`. `--priority` overrides it.

The command prints the slug and UUID it created, plus the case's page on
donobu.com when the account has one. A proposal that is mid-validation,
already promoted, dismissed, or stale is refused with the API's own words,
as is an account without the test-cases entitlement.

Accepting does not write a test. Automate the case next, as Workflow A
describes.

### 3. Draft what Donobu did not propose

Proposals come from the pages and facts Donobu has seen. Read the knowledge
base and write the cases it missed:

```bash
npx donobu context show                 # facts, pages, known elements
npx donobu cases create cart-total-matches-catalog \
  --title "Cart total matches the catalog price" \
  --section "Payments > Cart" --priority high \
  --description-file - <<'MD'
## Preconditions

- Signed out shopper

## Steps

1. Note the price of the first product in the catalog
2. Add it to the cart and open the cart

## Expected result

- The cart total equals the noted price
MD
```

Draft one case per behavior `context show` names: a `behavior` fact is a
case, a `quirk` usually is one too, and each page with known elements shows
where those behaviors live. Write every draft in the template above, then
create it.

Slug rules: lowercase letters, digits, dots, underscores, and hyphens, up
to 64 characters. The API rejects anything else and names the field in its
error. Pick a slug that reads well as a tag, because that is what it
becomes.

`cases create` records `source: cli` by default, which is the truthful
answer when you wrote the case. Pass `--source import` instead when you are
loading someone else's inventory, a CSV or a TestRail export for example, so
the account can tell imported rows from ones Donobu helped write. An accepted
proposal records `source: context` instead, and keeps the proposal's ID, so
the account can always tell the three writers apart. The case is also filed
under the project's app: `--app <origin>` names it, and without the flag the
CLI uses `DONOBU_APP_ORIGIN`, then `.donobu/config.json`, then the
`app.origin` recorded in a sole committed context export's `app.json` (the
export directory is named for the hostname alone, so the origin comes out of
the file), and files the case under no app when none of those resolves. It
prints the app it chose.

When `context show` is empty, Donobu has not learned the app yet. Run
`npx donobu explore <url>` first: it tours the app read-only and distills what
it sees, which is usually enough to derive cases from. If you cannot run a
browser, ask the user to explore it in Donobu Studio (Apps, then Explore), or
capture from a run with `npx donobu test --product-context=full`. Then read
`context show` again.

## Workflow C: file a recorded session against a case

Drive the session as `references/driving.md` describes, then name the case
when you save it:

```bash
npx donobu save tests/checkout.spec.ts --case checkout-guest
```

The emitted test carries `tag: ['@checkout-guest']`, and the case title
becomes the test title and the JSDoc objective. Pass `--name` when you want
a different test title; the tag stays either way. `--case` resolves the slug
in Donobu Cloud before anything is written, so an unknown slug fails the
save rather than leaving an unlinked spec on disk. `--amend --case <slug>`
re-tags the test it replaces.

Run the spec. The link derives from the tag exactly as it does for a
hand-written test.

## Commands

| Command | What it does |
| --- | --- |
| `cases list [--section <s>] [--priority <p[,p...]>] [--app <origin>] [--source <s>] [-n <count>] [--json]` | The inventory in slug order, with each case's linked-test count. `--app` and `--source` narrow it to one app or one writer. |
| `cases show <case> [--json]` | One case in full, with its source, app, linked tests, and each link's source. |
| `cases create <slug> --title <t> [--description <text> \| --description-file <path>] [--section <s>] [--priority <p>] [--external-id <id>] [--source cli\|import] [--app <origin>]` | Create a case. `--description-file -` reads stdin. |
| `context proposals [origin] [--status candidate\|validated\|all] [--json]` | Donobu's proposed test cases for one app, with the ID `cases accept` takes. |
| `cases accept <proposal-id> [--slug <slug>] [--section <s>] [--priority <p>] [--app <origin>]` | Accept a proposal as a test case. Slug and priority come from the proposal, the module is left blank. |
| `cases update <case> [--slug <new>] [--title <t>] [--description <text> \| --description-file <path>] [--section <s>] [--priority <p>] [--external-id <id>] [--app <origin>]` | Change fields. Omitted fields keep their value; an empty string clears the description, section, external ID, or app. |
| `cases delete <case-uuid>` | Delete a case and its links; the tests survive. Irreversible, no prompt, UUID only. |
| `cases link <case> <test-id>` | Link a test by hand (source `manual`). |
| `cases unlink <case> <test-id>` | Remove a link. A tag link returns at the next sync. |

Every row runs as `npx donobu <command>`. A `<case>` is named by its exact
slug or its UUID. `delete` is the exception: it takes the UUID only,
because slugs run in series like `tc-auth-001` where a typo names a
neighboring case. Get the UUID from `cases show <slug>`.
