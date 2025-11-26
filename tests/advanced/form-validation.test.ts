import { test, expect } from 'donobu';
import { z } from 'zod/v4';

test('Field validation test - bugs form', async ({ page }) => {
  await page.goto('https://qa-practice.netlify.app/bugs-form');

  const aiResponse = await page.ai(
    `Test all input fields on this page for validation issues.
     Check required fields, wrong formats, invalid data, max/min values, 
     empty submissions, email format, dropdown selections, and textarea rules.
     Confirm the form shows correct error messages and prevents submission when invalid.
    `,
    {
      schema: z.object({
        status: z.enum(["PASS", "FAIL"]),
        issues: z.array(z.string())
      }),
      maxToolCalls: 50
    }
  );

  expect(
    aiResponse.status,
    aiResponse.issues.length ? aiResponse.issues.join("\n") : "All validations passed"
  ).toBe("PASS");
});
