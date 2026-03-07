import { test } from 'donobu';

test('Test survives modals and popups', async ({ page }) => {
  await page.goto('https://www.starbucks.com');

  await page.ai('Go to the "Rewards" page');

  await page.ai.assert('Ensure there is a CTA for joining the rewards program.');
});