import { test, expect } from 'donobu';

test('sauce-login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.ai(`Log in as a standard user`, { volatileElementIds: true });

    // Assert that the user is logged in by checking the URL
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await page.context().storageState({ path: 'sauce-auth.json' });

});
