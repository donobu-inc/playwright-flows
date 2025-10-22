import { expect, test } from 'donobu';

test('Checkly dev docs search', {}, async ({ page }) => {
  await page.goto('https://checklyhq.com');
  await page.ai(
    `Click into to the developer docs page via the Resources dropdown menu`
  );
  expect(page.url()).toEqual('https://www.checklyhq.com/docs/');
  await page.ai(
    'Do a search for "Playwright check suite" and chose the match for "Constructs > DETECT".'
  );
  expect(page.url()).toEqual(
    'https://www.checklyhq.com/docs/constructs/playwright-check/'
  );
});
