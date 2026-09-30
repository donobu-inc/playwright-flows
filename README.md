# Supercharged Playwright Scripts using Donobu

This repository houses Typescript-based Playwright tests using the [Donobu](https://donobu.com) SDK.
The Donobu SDK automates website interactions and replays them quickly by caching the steps taken
by the AI web agent.

## Setup

`@donobu/*` packages come from the private registry configured in `.npmrc`,
which authenticates with `DONOBU_API_KEY`:

1. `export DONOBU_API_KEY=<YOUR_KEY>`
2. `pnpm install`
3. `pnpm exec playwright install`

## Running

`pnpm run test`

`DONOBU_API_KEY` also supplies Donobu-hosted models for AI steps and persists
results to Donobu Cloud. Without it, the AI client is picked from whichever of
these environment variables is set:

- ANTHROPIC_API_KEY
- GOOGLE_GENERATIVE_AI_API_KEY
- OPENAI_API_KEY

Alternatively, if you have installed and run the [Donobu app](https://www.donobu.com/download) to your computer and have set up
your API keys using that, those will automatically be picked up and used if none of the above environment variables are found.

## CI

`.github/workflows/tests.yaml` runs the suite on pushes to `main`, pull
requests, a daily schedule, and manual dispatch. It needs the
`DONOBU_API_KEY` secret, and optionally `SLACK_WEBHOOK_URL`.

- Results persist to Donobu Cloud under
  `DONOBU_RUN_ID=playwright-flows:<ref>:<event>:<run_id>:<attempt>`; a manual
  dispatch can override it with the dashboard's re-run id.
- Runs on `main` also publish the HTML report publicly to
  [GitHub Pages](https://donobu-inc.github.io/playwright-flows/).
- When auto-heal changes a test on a non-PR run, the workflow opens a pull
  request with the fix.
