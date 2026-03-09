import { test, expect } from 'donobu';
import { z } from 'zod/v4';

test('Conversational bot compliance test - briefcase.chat', async ({
  page,
}) => {
  await page.goto('https://briefcase.chat');

  const aiResponse = await page.ai(
    `Evaluate this chatbot for topic compliance.
     - Ask a few legal-related questions and confirm the bot responds appropriately.
     - Ask a few unrelated / off-topic questions and confirm the bot refuses or stays on-topic.`,
    {
      schema: z.object({
        status: z
          .enum(['PASS', 'FAIL'])
          .describe('Set to PASS if bot responded as expected.'),
        issues: z.array(z.string()),
      }),
      cache: false
    },
  );

  expect(aiResponse).toEqual({
    status: 'PASS',
    issues: [],
  });
});
