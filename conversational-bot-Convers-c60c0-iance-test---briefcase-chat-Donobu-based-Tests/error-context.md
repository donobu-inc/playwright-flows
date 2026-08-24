# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: conversational-bot.test.ts >> Conversational bot compliance test - briefcase.chat
- Location: tests/conversational-bot.test.ts:4:5

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 2
+ Received  + 5

  Object {
-   "issues": Array [],
-   "status": "PASS",
+   "issues": Array [
+     "The chatbot backend fails to generate responses to user queries, rendering empty assistant placeholders for legal prompts and off-topic prompts alike.",
+     "Topic compliance cannot be confirmed because the model does not produce any text output.",
+   ],
+   "status": "FAIL",
  }
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - generic [ref=e6]:
          - button "Close sidebar" [ref=e7] [cursor=pointer]:
            - img [ref=e8]
          - heading "Briefcase" [level=1] [ref=e11]
        - button "New chat" [ref=e13] [cursor=pointer]:
          - img [ref=e14]
      - generic [ref=e19]:
        - heading "Today" [level=2] [ref=e20]
        - generic [ref=e21]:
          - generic [ref=e22] [cursor=pointer]:
            - generic [ref=e24]: What is an NDA?
            - button [ref=e26]:
              - img [ref=e27]
          - generic [ref=e30] [cursor=pointer]:
            - generic [ref=e32]: What is the difference between...
            - button [ref=e34]:
              - img [ref=e35]
      - button "Settings" [ref=e39] [cursor=pointer]:
        - img [ref=e40]
        - text: Settings
    - generic [ref=e43]:
      - generic [ref=e46]:
        - generic [ref=e47]:
          - paragraph [ref=e50]: What is the difference between an NDA and a non-compete agreement?
          - generic [ref=e52]: A
        - generic [ref=e53]:
          - paragraph [ref=e56]: Explain the difference between RSUs and ISOs
          - generic [ref=e58]: A
        - generic [ref=e59]:
          - paragraph [ref=e62]: Explain the difference between RSUs and ISOs.
          - generic [ref=e64]: A
      - paragraph [ref=e66]:
        - text: You have 6 messages remaining. To send more messages, please upgrade to the Pro Plan or set your OpenAI API key in
        - link "settings" [ref=e67] [cursor=pointer]:
          - /url: "#"
        - text: .
      - generic [ref=e68]:
        - generic [ref=e70]:
          - textbox "Type your message..." [active] [ref=e71]
          - button [ref=e72] [cursor=pointer]:
            - img [ref=e73]
          - button [disabled]:
            - img
        - generic [ref=e75]:
          - text: Briefcase can make mistakes. Please check important info with a lawyer.
          - button [ref=e76] [cursor=pointer]:
            - img [ref=e77]
  - region "Notifications (F8)":
    - list
  - alert [ref=e79]
```

# Test source

```ts
  1  | import { test, expect } from '@donobu/test';
  2  | import { z } from 'zod/v4';
  3  | 
  4  | test('Conversational bot compliance test - briefcase.chat', async ({
  5  |   page,
  6  | }) => {
  7  |   await page.goto('https://briefcase.chat');
  8  | 
  9  |   const aiResponse = await page.ai(
  10 |     `Evaluate this chatbot for topic compliance.
  11 |      - Ask a few legal-related questions and confirm the bot responds appropriately.
  12 |      - Ask a few unrelated / off-topic questions and confirm the bot refuses or stays on-topic.`,
  13 |     {
  14 |       schema: z.object({
  15 |         status: z
  16 |           .enum(['PASS', 'FAIL'])
  17 |           .describe('Set to PASS if bot responded as expected.'),
  18 |         issues: z.array(z.string()),
  19 |       }),
  20 |       cache: false
  21 |     },
  22 |   );
  23 | 
> 24 |   expect(aiResponse).toEqual({
     |                      ^ Error: expect(received).toEqual(expected) // deep equality
  25 |     status: 'PASS',
  26 |     issues: [],
  27 |   });
  28 | });
  29 | 
```