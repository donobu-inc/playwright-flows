import { test, expect } from 'donobu';
import { z } from 'zod/v4';

test('Conversational bot compliance test - briefcase.chat', async ({ page }) => {
  await page.goto('https://briefcase.chat');

  const aiResponse = await page.ai(
    `Evaluate this chatbot for topic compliance.
     - Ask a few legal-related questions and confirm the bot responds appropriately.
     - Ask a few unrelated / off-topic questions and confirm the bot refuses or stays on-topic.
     Return:
     {
        "status": "PASS" or "FAIL",
        "issues": string[]
     }`,
    {
      schema: z.object({
        status: z.enum(["PASS", "FAIL"]),
        issues: z.array(z.string())
      }),
      maxToolCalls: 50
    }
  );

  const result = aiResponse as { status: string; issues: string[] };

  // Standard assertion
  expect(
    result.status,
    result.issues.length ? result.issues.join("\n") : "Bot passed compliance check"
  ).toBe("PASS");
});
