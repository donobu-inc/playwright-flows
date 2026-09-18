import { test } from '@donobu/test';

/**
 * A visitor can get past the Starbucks site's modals and popups to the Rewards
 * page, which invites them to join the rewards program.
 */
test('Test survives modals and popups', async ({ page }) => {
  await page.goto('https://www.starbucks.com');

  await page.ai('Go to the "Rewards" page');

  await page.ai.assert(
    'Ensure there is a CTA for joining the rewards program.',
  );
});
