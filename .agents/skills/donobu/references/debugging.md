<!-- Managed by `donobu skills install`. Edits are overwritten on the next install. -->

# Debugging Donobu Test Failures

How to surface the context around a failing Donobu test quickly. Files
committed to the repo are read directly; run and app data comes through the
`donobu` CLI. A run persisted to Donobu Cloud when `DONOBU_API_KEY` was set
at run time, and to the local store when it was not — the CLI resolves that
for you and prints a `Backends:` line saying which store answered.

## In the repo

- the failing spec, and its cached AI actions
  (`.cache-lock/<spec-file>.cache.js` — what the test believed it should do);
- `.donobu/context/<hostname>/KNOWLEDGE.md` — a committed export of the app
  knowledge base (`npx donobu context export` refreshes it).

## The run

What is Donobu connected to?

```
$ npx donobu status
@donobu/test@x.y.z

Env file:  /repo/.env (applied DONOBU_API_KEY)

Backends (PERSISTENCE_PRIORITY: DONOBU, S3, GCS, LOCAL, RAM):
  DONOBU  active   api.donobu.com (key …a4f2, from .env)
  LOCAL   active   /Users/dev/Library/Application Support/Donobu Studio/database.sqlite

Cloud identity: Acme QA (account acct_31, slug acme-qa)
```

`DONOBU active` means reads can answer from cloud (where CI runs with a key
persisted); `LOCAL` only means answers come from this machine's store, so an
empty result says nothing about CI.

What happened in the run?

```
$ npx donobu runs show latest
Run 9d8f3a1c — 2026-08-19T14:02:11Z · CI (github) · git 4f9c21b
  passed   22
  failed    1  checkout completes with saved card  →  result 51c2e0d8
  skipped   1
```

Has this test failed before, or is this new?

```
$ npx donobu results list --test "checkout completes with saved card" -n 5
RESULT    RUN       WHEN                  STATE    PHASE
51c2e0d8  9d8f3a1c  2026-08-19T14:02:11Z  FAILED   INITIAL
b0919d4c  4177c2aa  2026-08-18T13:58:40Z  SUCCESS  INITIAL
20c77e91  b21d90f3  2026-08-17T13:59:12Z  SUCCESS  HEAL_RERUN
```

`npx donobu results show <result-id>` returns one result in full: state and
provenance (run ID, attempt, `INITIAL` vs `HEAL_RERUN`, CI job URL, git
sha/branch), the spec file and errors, every tool call with its parameters
and outcome, every AI decision's observations with their screenshot file
IDs, and the treatment plan when triage produced one.

Each result also carries files, fetchable by name:

```
$ npx donobu files get 51c2e0d8 treatment-plan.json --out evidence/
$ npx donobu files get 51c2e0d8 triage-failure-screenshot.png --out evidence/
```

The well-known names: `donobu-test-result.json` (spec path, errors),
`treatment-plan.json` (Donobu's diagnosis and proposed fix),
`heal-outcome.json` (heal verdict: `HEALED` / `NOT_REATTEMPTED` /
`RERUN_FAILED`), `triage-evidence.json` (classified failure reason plus
historical signals — `cacheWasRecentlyValid: true` means a recent run passed
with the same cached steps, i.e. the app changed underneath the test),
`triage-failure-screenshot.png`,
`triage-baseline-screenshot.png`, `triage-final-state-screenshot.png`,
`logs.json`, `video.webm`, `browserstate.json` — plus the screenshots
referenced by tool calls (`postCallImageId`) and AI-query observations
(`cleanScreenshotId`, `annotatedScreenshotId`).

## The app

What does Donobu already know about this app? (The app defaults from
`.donobu/config.json` or `DONOBU_APP_ORIGIN`; pass an origin explicitly only
in multi-app repos.)

```
$ npx donobu context show
App: https://app.acme.com (from .donobu/config.json)
Acme Storefront
Origin: https://app.acme.com
App ID: 7fd2c9e1

Overview:
  Storefront with catalog, cart, and checkout.

Facts:
  behavior:
    - Checkout requires a verified email before payment (/checkout)
  quirk:
    - Search results render empty on the first keystroke, then populate

Pages:
  /checkout — Payment and order confirmation
    Known elements:
      [data-test=pay-now] — Pay now button (41 successes)

Open anomalies:
  [ui] Cart badge lags one item behind after rapid adds
```

A failure matching an open anomaly is a known quirk; a missing element has
proven selectors on record; facts explain app behavior a failing objective
may have tripped over.

Targeted extraction and multi-app stores:

```
$ npx donobu context show --json | jq '.anomalies'
$ npx donobu context show --json | jq '.pages[] | select(.urlPattern == "/checkout")'
$ npx donobu context list
```

## The healer

Donobu triages failures and can heal tests itself — check what the
machinery already did before hand-editing a spec:

- A failed result's `treatment-plan.json` is Donobu's diagnosis of that
  failure and its proposed fix; `heal-outcome.json` records the verdict of a
  past heal attempt.
- `npx donobu test --auto-heal` triages, plans, and reruns in one pass;
  `npx donobu heal --plan <path>` applies a previously generated plan. Both
  can rewrite spec files and rerun dependent tests, and heal reruns are
  stamped `HEAL_RERUN` in result provenance.
- Heal reruns invoke the LLM (real token cost), and a pending treatment plan
  and a hand-edit to the same spec will conflict.

## Reruns and flags

- `npx donobu test` forwards Playwright flags untouched (`-g`, `--headed`,
  …; everything after a bare `--` passes through verbatim). Donobu's own
  flags: `--auto-heal`, `--no-triage`, `--no-cloud-sync`, `--clear-ai-cache`,
  `--product-context off|failures|full`, `--locale <tag>`,
  `--triage-output-dir <dir>`.
- Cached AI actions in `.cache-lock/` replay without the LLM.
  `--clear-ai-cache` re-derives every AI step — different behavior and cost,
  not just a slower run. Every uncached AI step spends LLM tokens.
- AI steps are nondeterministic: a green rerun may have taken a different
  action path than the failing one did.
- A local repro of a CI failure runs under your environment, not CI's —
  `npx donobu status` shows yours.

## The API directly

The CLI is porcelain over the Donobu cloud API. `GET
https://api.donobu.com/schema` returns the full OpenAPI document
(unauthenticated; YAML with `Accept: application/yaml`); everything else
authenticates with `Authorization: Bearer $DONOBU_API_KEY`. The reads behind
the surfaces above:

```
GET /v1/me                              caller identity (account, key)
GET /v1/tests?name=<title>              test records (ID, latest result, health)
GET /v1/flows?runId=<id>&view=summary   one run's results (state, testId, provenance)
GET /v1/flows?testId=<id>               one test's results across runs
GET /v1/flows/<id>                      full result record
GET /v1/flows/<id>/tool-calls           steps with outcomes and screenshot references
GET /v1/flows/<id>/ai-queries           AI observations (screenshot file IDs)
GET /v1/flows/<id>/files/<name>         stream a result file (names above; Range supported)
GET /v1/apps/...                        the app knowledge base behind `donobu context`
```
