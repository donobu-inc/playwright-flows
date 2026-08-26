import { test, expect } from '@donobu/test';

/** Logs into the storefront and saves the session for the shopping suite. */
test('authenticate', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.ai(`Log in as a standard user`, { volatileElementIds: true });

  // Assert that the user is logged in by checking the URL
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  await page.context().storageState({ path: '.auth/shopping.json' });
});
