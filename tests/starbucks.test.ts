import { test } from 'donobu';

test('Test for https://www.starbucks.com', {}, async ({ page }) => {
  await page.goto('https://www.starbucks.com');
  await page.ai('Go to the featured menu page');
  await page.visuallyAssert({
    assertionToTestFor: 'Assert that the featured menu page has a fall vibe.',
  });
  await page.ai('Find a Starbucks store in Stowe, Vermont');
  await page.visuallyAssert({
    assertionToTestFor:
      'Assert that a store in Stowe, Vermont is found and the map shows Mt. Mansfield close by.',
  });
});
