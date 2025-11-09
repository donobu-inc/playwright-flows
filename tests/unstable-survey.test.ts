import { test, expect } from 'donobu';
import { z } from 'zod/v4';

test('Fill out a survey', async ({ page }) => {
  await page.goto('https://unstable-survey-dinoer.replit.app');
  const surveyData = await page.ai.act(
    `Fill out the all of the survey questions with fake data go through
the submission process until you get to a "Thank You" page.`,
    {
      schema: z.object({
        surveyData: z.array(
          z.object({
            question: z.string(),
            response: z.string(),
          })
        ),
      }),
    }
  );
  console.log(
    `Completed the survey! Survey data: ${JSON.stringify(surveyData, null, 2)}`
  );
  await expect(page).toHaveURL(/thank-you/);
});
