import { test, expect } from 'donobu';
import { z } from 'zod/v4';

test('Fill out a survey', {}, async ({ page }) => {
  await page.goto('https://unstable-survey-dinoer.replit.app');
  const surveyData = await page.ai(
    'Fill out the survey with fake data and submit it.',
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
