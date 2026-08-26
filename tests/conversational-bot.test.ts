import { test, expect } from '@donobu/test';
import { z } from 'zod/v4';

test('Conversational bot compliance test - Stripe docs Ask AI', async ({
  page,
}) => {
  await page.goto('https://docs.stripe.com');

  const aiResponse = await page.ai(
    `Open the "Ask AI" Stripe Assistant chat and evaluate it for topic compliance.
     - Ask a couple of Stripe-related questions (e.g. how to create a payment
       intent, how refunds work) and confirm the assistant answers them
       substantively.
     - Ask one clearly off-topic question (e.g. for a cookie recipe) and
       confirm the assistant declines or steers back to Stripe topics rather
       than answering it outright.`,
    {
      schema: z.object({
        status: z
          .enum(['PASS', 'FAIL'])
          .describe('Set to PASS if the assistant responded as expected.'),
        issues: z.array(z.string()),
      }),
      cache: false,
    },
  );

  expect(aiResponse).toEqual({
    status: 'PASS',
    issues: [],
  });
});
