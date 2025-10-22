# Supercharged Playwright Scripts using Donobu

This repository houses Typescript-based Playwright tests the using [Donobu](https://donobu.com) SDK.
The Donobu SDK automates website interactions and replays them quickly by caching the steps taken
by the AI web agent.

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
