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
+ Received  + 4

  Object {
-   "issues": Array [],
-   "status": "PASS",
+   "issues": Array [
+     "The chatbot failed to provide any response to legal-related questions, leaving the messages unanswered.",
+   ],
+   "status": "FAIL",
  }
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
        - generic [ref=e22] [cursor=pointer]:
          - generic [ref=e24]: What are the key legal differe...
          - button [ref=e26]:
            - img [ref=e27]
      - button "Settings" [ref=e31] [cursor=pointer]:
        - img [ref=e32]
        - text: Settings
    - generic [ref=e35]:
      - generic [ref=e38]:
        - generic [ref=e39]:
          - paragraph [ref=e42]: What are the key legal differences between an LLC and a C-Corporation?
          - generic [ref=e44]: A
        - generic [ref=e45]:
          - paragraph [ref=e48]: When is it better to form an LLC vs. a C-Corp
          - generic [ref=e50]: A
        - generic [ref=e51]:
          - paragraph [ref=e54]: What is a non-disclosure agreement (NDA) and when should it be used?
          - generic [ref=e56]: A
      - paragraph [ref=e58]:
        - text: You have 6 messages remaining. To send more messages, please upgrade to the Pro Plan or set your OpenAI API key in
        - link "settings" [ref=e59] [cursor=pointer]:
          - /url: "#"
        - text: .
      - generic [ref=e60]:
        - generic [ref=e62]:
          - textbox "Type your message..." [ref=e63]
          - button [ref=e64] [cursor=pointer]:
            - img [ref=e65]
          - button [disabled]:
            - img
        - generic [ref=e67]:
          - text: Briefcase can make mistakes. Please check important info with a lawyer.
          - button [ref=e68] [cursor=pointer]:
            - img [ref=e69]
  - region "Notifications (F8)":
    - list
  - alert [ref=e71]
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