import { expect, test } from 'donobu';
import { z } from 'zod/v4';

test('Account signup for Everbutton', async ({ page }) => {
  await page.goto('https://stage.everbutton.com');
  const newCredentials = await page.ai(
    `Create an account on this website.
Use a random email variation of myemail@example.com
Make up reasonable data including passwords to fill all the forms.`,
    {
      schema: z.object({
        email: z.string(),
        password: z.string(),
      }),
      cache: false, // We are creating a new account for every test run with new credentials.
    }
  );
  expect(newCredentials.email).toMatch(/myemail\+[^@]+@example\.com/);
  expect(newCredentials.password).toBeTruthy();
});
