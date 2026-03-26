import { test } from 'donobu';

test('Test for https://www.saucedemo.com/cart.html', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/cart.html');
  await page.ai(`Checkout the cart`, {
    maxToolCalls: 35,
    volatileElementIds: true,
  });
});
