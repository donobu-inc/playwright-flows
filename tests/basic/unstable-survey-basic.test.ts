/**
 * This test replays a recorded Donobu flow via `page.act(...)` using the cached
 * tool calls stored alongside this spec in `cache-lock.js`. If the cache entry
 * is missing or the parameters change, the run falls back to autonomous mode
 * and will require a GPT API key (e.g. OPENAI_API_KEY, ANTHROPIC_API_KEY, or
 * GOOGLE_GENERATIVE_AI_API_KEY).
 */
import { test } from 'donobu';

test('Test for https://unstable-survey-dinoer.replit.app', async ({ page }) => {
  await page.goto('https://unstable-survey-dinoer.replit.app');
  await page.ai(
    `Fill out the all of the survey questions with fake data go through
the submission process until you get to a "Thank You" page.
`,
    { allowedTools: ['assertPageText', 'click', 'inputText', 'scrollPage'] },
  );
});
