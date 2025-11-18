import { test } from 'donobu';

test("Ecommerce checkout test", { annotation: [{ type: 'env', description: 'USER_NAME, USER_PASSWORD, CARD_NUMBER, CARD_EXPIRY, CARD_CVC', },], }, async ({ page }) => {
    await page.goto("https://www.automationexercise.com/");
    await page.ai(`Login with ${process.env.USER_NAME} and ${process.env.USER_PASSWORD} and do add a product to the cart and checkout using ${process.env.CARD_NUMBER}, ${process.env.CARD_EXPIRY}, ${process.env.CARD_CVC}`)
    await page.ai.assert(`Assert that Order placed successfully message is displayed`)
})