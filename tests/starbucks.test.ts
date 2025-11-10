import { test } from 'donobu';

test('Test for https://www.starbucks.com', async ({ page }) => {
  await page.goto('https://www.starbucks.com');
  await page.ai.act('Go to the featured menu page');
  await page.ai.assert(
    `Assert that the featured menu page has a seasonally appropriate vibe for ${new Date()}`
  );
  await page.ai.act('Find a Starbucks store in Stowe, Vermont');
  await page.ai.assert(
    'Assert that a store in Stowe, Vermont is found and the map shows Mt. Mansfield close by.'
  );
});
