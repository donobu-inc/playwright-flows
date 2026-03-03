import { test, expect } from 'donobu';

test('Test survives modals and popups', async ({ page }) => {
  await page.goto('https://www.starbucks.com');

  await page.ai('Navigate to the featured drinks menu');

  await expect(page.getByText('savor and share')).toBeVisible();
});