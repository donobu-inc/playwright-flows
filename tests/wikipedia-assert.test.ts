import { expect, test } from 'donobu';
import { z } from 'zod/v4';

test('Inspect Wiki article history', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/Software_testing');
  const oldestRevision = await page.ai.act(
    'View the page history, sort by oldest, and find the oldest revision date.',
    {
      schema: z.object({
        day: z.number(),
        month: z.number(),
        year: z.number(),
      }),
    }
  );
  expect(oldestRevision.day).toEqual(5);
  expect(oldestRevision.month).toEqual(12);
  expect(oldestRevision.year).toEqual(2001);
});
