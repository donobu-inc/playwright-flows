import { test, expect } from '@donobu/test';
import { z } from 'zod/v4';

/**
 * A respondent can complete every question of the survey with made-up answers
 * and submit it through to the "Thank You" page, even though the form's
 * layout and element IDs shift between loads.
 */
test('Fill out a survey', async ({ page }) => {
  await page.goto('https://unstable-survey-dinoer.replit.app');
  const surveyData = await page.ai(
    `Fill out the all of the survey questions with fake data go through
the submission process until you get to a "Thank You" page.`,
    {
      schema: z.object({
        surveyData: z.array(
          z.object({
            question: z.string(),
            response: z.string(),
          }),
        ),
      }),
    },
  );
  expect(surveyData.surveyData.length).toBeGreaterThan(0);
  await expect(page).toHaveURL(/thank-you/);
});
