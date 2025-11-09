import { expect, test } from 'donobu';

test('Checkly dev docs search', async ({ page }) => {
  await page.goto('https://checklyhq.com');
  await page.ai.act(
    `Click on the Resources dropdown menu, then click into to the developer docs option`
  );
  expect(page.url()).toEqual('https://www.checklyhq.com/docs/');
  await page.ai.act(
    'Do a search for "Playwright check suite" and chose the match for "Constructs > DETECT".'
  );
  expect(page.url()).toEqual(
    'https://www.checklyhq.com/docs/constructs/playwright-check/'
  );
});
