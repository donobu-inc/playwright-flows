import { test, expect } from '@donobu/test';

/**
 * A logged-in shopper can complete checkout from the cart page and reach the
 * order confirmation.
 */
test('Shopper can check out the cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/cart.html');
  await page.ai(`Checkout the cart`, {
    maxToolCalls: 35,
    volatileElementIds: true,
  });
  await expect(page).toHaveURL(
    'https://www.saucedemo.com/checkout-complete.html',
  );
  await page.ai.assert('The page thanks the shopper for their order.');
});
