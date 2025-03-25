# Supercharged Playwright Scripts using Donobu

This repository houses Typescript-based Playwright flows that were generated using [Donobu](https://donobu.com).
Donobu extends the Playwright test fixture to include capabilities like:

- Adding prioritized failover for when standard one-shot selectors fail when clicking, inputting text, etc.
- Performing selector-less visual/semantic assertions on a page.
- Creating a browser cookie report for a page (`page.createCookieReport()`).
- Running an accessibility test for a page (`page.runAccessibilityTest()`).

The flows are housed in the [/tests](/tests) directory and can be run as Playwright tests.

## Setup

1. `npm install`
2. `npx playwright install`

## Running

`OPENAI_API_KEY=<YOUR_KEY> npm run test`

Note that the underlying GPT client used (if necessary) will be dynamically set based on the environment variable provided.
Supported environment variables/platforms are:

- ANTHROPIC_API_KEY
- GOOGLE_GENERATIVE_AI_API_KEY
- OPENAI_API_KEY

Alternatively, if you have installed and run the [Donobu app](https://www.donobu.com/download) to your computer and have set up
your API keys using that, those will automatically be picked up and used if none of the above environment variables are found.
