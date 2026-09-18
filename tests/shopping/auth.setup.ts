import { test, expect } from '@donobu/test';

/**
 * The standard Sauce Demo user can log in; the resulting session is saved so
 * the shopping suite starts already authenticated.
 */
test('authenticate', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  // The demo credentials are printed on the login page itself, so no env var
  // placeholder is needed here.
  await page.ai(`Log in as a standard user`, { volatileElementIds: true });

  // Assert that the user is logged in by checking the URL
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  await page.context().storageState({ path: '.auth/shopping.json' });
});
