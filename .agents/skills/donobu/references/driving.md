# Driving a live browser session

`donobu session` gives you (the coding agent) a live, recorded browser you
drive one step at a time. Use it to explore an app, reproduce a bug, answer
questions about a live page, or author a test interactively — then save the
recording as a runnable `@donobu/test` spec. You do the deciding; Donobu does
the observing, acting, and recording.

Every command prints JSON on stdout. Exit code 1 means the action failed or an
assertion did not hold — read the `result`/`failure` field, don't retry
blindly.

## The loop

```bash
npx donobu session start --url https://app.example.com   # prints the session id
npx donobu observe                        # screenshot paths + numbered elements
npx donobu click --element 12             # act on what you saw
npx donobu observe --view text            # confirm the effect
npx donobu assert 'Cart shows 3 items' --check '[...]'   # record a verified check
npx donobu save tests/cart.spec.ts        # emit the recording as a spec
npx donobu session end
```

With one live session no ID is needed; pass `--session <id>` when several are
live (`donobu session list` shows them). Sessions idle out after 30 minutes
(`--idle-minutes` to change); `donobu session end --all` cleans up strays.
`session start` also takes `--device "iPhone 15"` (or `"Desktop Chrome"` for
the user's real Chrome) and `--headless`.

## Debugging a failed test: replay

To investigate a failed run, rebuild its session instead of re-driving by
hand (find the result ID with `donobu results list`):

```bash
npx donobu session start --replay <result-id> --until-failure
```

This rebuilds the recording deterministically: the browser starts from the
recording's configured INITIAL storage state (clean when it had none), then
its steps re-execute — stopping just BEFORE the recorded failing step, so
you land on the page where it broke, ready to observe. Recorded asserts
replay through their saved deterministic checks (no AI); steps that would
need an AI are skipped and counted in the reported summary. Without
`--until-failure` the whole recording replays, halting at the first live
failure. After fixing the flow interactively, use `save --amend` to write it
back.

## Observing

- `donobu observe` — screenshot file paths (read the image!), URL, tabs, and
  the interactable elements as `{element number → html snippet}`. `--filter
  <text>` narrows elements by snippet substring.
- `donobu observe --view text|aria|html` — the text-first ladder. `text`
  answers most content questions cheapest; `aria` shows structure and roles;
  `html --filter '#pricing'` returns one subtree's raw HTML.
- Large views are spilled to a file and the path is printed — Grep/Read the
  file instead of re-fetching.
- `donobu logs` — browser console, page errors, and failed/slow network
  requests. Pass the printed `nextCursor` back as `--since <cursor>` to see
  only what happened after your last action. `--all` includes runner logs.
- `donobu eval '<js>'` — evaluate JavaScript in the page (recorded as a step).
- `observe` also returns a `recall` list — what Donobu's knowledge base
  already knows about this app and screen (directives first, then facts for
  the current page). Treat directives as rules.

## Network mocking

`donobu route` installs Playwright request mocks on the session (session
configuration, not recorded steps — they never enter saved specs):

```bash
npx donobu route '**/api/telemetry' --abort          # silence noise
npx donobu route '**/api/flags' --status 200 --body '{"beta":true}'
npx donobu route list                                # patterns + hit counts
npx donobu unroute '**/api/flags'                    # or bare unroute for all
```

## Acting

Common verbs: `click`, `type`, `press`, `select`, `hover`, `scroll`, `goto`.
Each targets an element by CSS selector or by `--element <n>` from the latest
observation:

```bash
npx donobu click '#submit'
npx donobu click --element 12 --rationale 'Open the pricing tab'
npx donobu type '#email' '{{$.env.EMAIL}}' --submit
npx donobu goto https://app.example.com/settings
```

The long tail runs through `donobu act <tool> --params '<json>'` (uploads,
dialogs, tab switches, waits — the whole tool catalog).

Rules that prevent silent mistakes:

- **Element numbers go stale.** After any page-mutating action, `--element`
  addressing is refused until you `observe` again. Selectors always work.
- **Secrets never appear in commands.** Start the session with `--env EMAIL
  --env PASSWORD` and type `{{$.env.EMAIL}}` — the value is resolved from the
  project `.env` at execution time, and the recording stays parameterized.
- Every action records a durable replay selector regardless of how you
  addressed the element — the recording is codegen-ready by construction.

## Dialogs

Browser-native dialogs (`alert`/`confirm`/`prompt`) block the page and must be
answered by a handler registered BEFORE they fire — you cannot react after the
fact. The session's default answers every dialog by dismissing it and
recording that it did; a silently cancelled `confirm` is therefore visible in
`postState.lastDialog` (type, message, how it was answered) and as a recorded
step. To take the other branch, **arm the answer first, then trigger it**:

```bash
npx donobu dialog accept                     # next confirm: OK
npx donobu dialog accept --text 'Fable'      # next prompt: answer with text
npx donobu dialog dismiss                    # explicit cancel (also recorded)
npx donobu click '#delete'                   # the action that pops the dialog
npx donobu dialog status                     # armed count + last dialog seen
```

Armed responses are consumed oldest-first, one per dialog. Alerts have no
choice — they are dismissed and surfaced via `lastDialog` only.

## Asserting

You judge the page yourself (from observations), then record the verdict WITH
deterministic checks that replay without any AI:

```bash
npx donobu assert 'The Done confirmation is shown' --check '[
  {"locator": "text", "role": null, "value": "Done!", "valueIsRegex": false,
   "assertion": "toBeVisible", "attributeValue": null}
]'
```

Each check maps to one Playwright `expect()`: `locator` is `role`/`text`/
`label` (or null for page-level), `assertion` is one of `toBeVisible`,
`toBeHidden`, `toBeEnabled`, `toBeDisabled`, `toBeChecked`, `toHaveValue`,
`toContainText`, `toHaveAttribute`, `toHaveTitle`, `toHaveURL`;
`attributeValue` carries the second value where needed. The checks run
immediately — a failing check exits 1 and records a failed step.

## Saving and evidence

- `donobu steps` — the ledger (every action, outcome, and URL, numbered).
- `donobu save <path> [--name <title>] [--steps 1,2,5-9]` — emit the selected
  successful steps as a `@donobu/test` spec. Failed steps and notes are
  excluded automatically; use `--steps` to drop exploratory dead ends.
- `donobu save <path> --amend --name '<exact test title>'` — replace that one
  test inside an EXISTING spec (describe-nested tests included); imports,
  hooks, and sibling tests survive, and a missing or ambiguous title is
  refused rather than overwritten.
- Saving also seeds the spec's `.cache-lock` AI cache with every recorded
  assert's verified checks, so the emitted `page.ai.assert(...)` lines replay
  deterministically — no AI key needed at run time.
- `donobu note '<text>'` — annotate the recording at the current position.
- After `session end`, the session appears in `donobu results` like any run:
  `donobu results show <session-id>` and `donobu files get <session-id>
  logs.json` retrieve the full evidence trail.
