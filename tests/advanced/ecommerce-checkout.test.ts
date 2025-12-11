import { test } from 'donobu';

test("Ecommerce checkout test", { annotation: [{ type: 'env', description: 'USER_NAME, USER_PASSWORD, CARD_NUMBER, CARD_EXPIRY, CARD_CVC', },], }, async ({ page }) => {
    await page.goto("https://www.automationexercise.com/");
    await page.ai(`Login with {{$.env.USER_NAME}} and {{$.env.USER_PASSWORD}} and do add a product to the cart and checkout using card number {{$.env.CARD_NUMBER}}, expiry {{$.env.CARD_EXPIRY}}, cvc {{$.env.CARD_CVC}}`,{
        envVars: ['USER_NAME', 'USER_PASSWORD', 'CARD_NUMBER', 'CARD_EXPIRY', 'CARD_CVC'],
    })
    await page.ai.assert(`Assert that Order placed successfully message is displayed`)
})