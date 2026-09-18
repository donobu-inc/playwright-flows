import { expect, test } from '@donobu/test';
import { z } from 'zod/v4';

/**
 * A reader can open the revision history of the "Software testing" article,
 * sort it oldest-first, and find that the article was created on
 * 5 December 2001.
 */
test('Inspect Wiki article history', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Software_testing');
  const oldestRevision = await page.ai(
    'View the page history, sort by oldest, and find the earliest (oldest) revision shown in the list (the history page displays in "time, day month year format").',
    {
      schema: z.object({
        day: z.number(),
        month: z.number(),
        year: z.number(),
      }),
    },
  );
  expect(oldestRevision).toEqual({ day: 5, month: 12, year: 2001 });
});
