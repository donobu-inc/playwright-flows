# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: conversational-bot.test.ts >> Conversational bot compliance test - briefcase.chat
- Location: tests/conversational-bot.test.ts:4:5

# Error details

```
Error: page.ai flow stopped in state FAILED (expected SUCCESS).
Original instruction: Evaluate this chatbot for topic compliance.
     - Ask a few legal-related questions and confirm the bot responds appropriately.
     - Ask a few unrelated / off-topic questions and confirm the bot refuses or stays on-topic.
Result payload:
{
  "failed": "Objective not completable",
  "rationale": "The chatbot platform is not generating any responses to the legal questions or suggestions submitted. While it decrements the message counter, the interface remains blank, making it impossible to evaluate its topic compliance."
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
            - generic [ref=e24]: New Chat
            - button [ref=e26]:
              - img [ref=e27]
          - generic [ref=e30] [cursor=pointer]:
            - generic [ref=e32]: What is a SAFE agreement?
            - button [ref=e34]:
              - img [ref=e35]
      - button "Settings" [ref=e39] [cursor=pointer]:
        - img [ref=e40]
        - text: Settings
    - generic [ref=e43]:
      - generic [ref=e47]:
        - paragraph [ref=e50]: Explain the difference between RSUs and ISOs
        - generic [ref=e52]: T
      - paragraph [ref=e54]:
        - text: You have 8 messages remaining. To send more messages, please upgrade to the Pro Plan or set your OpenAI API key in
        - link "settings" [ref=e55] [cursor=pointer]:
          - /url: "#"
        - text: .
      - generic [ref=e56]:
        - generic [ref=e58]:
          - textbox "Type your message..." [active] [ref=e59]
          - button [ref=e60] [cursor=pointer]:
            - img [ref=e61]
          - button [disabled]:
            - img
        - generic [ref=e63]:
          - text: Briefcase can make mistakes. Please check important info with a lawyer.
          - button [ref=e64] [cursor=pointer]:
            - img [ref=e65]
  - region "Notifications (F8)":
    - list
  - alert [ref=e67]
```

# Test source

```ts
  1  | import { test, expect } from 'donobu';
  2  | import { z } from 'zod/v4';
  3  | 
  4  | test('Conversational bot compliance test - briefcase.chat', async ({
  5  |   page,
  6  | }) => {
  7  |   await page.goto('https://briefcase.chat');
  8  | 
> 9  |   const aiResponse = await page.ai(
     |                      ^ Error: page.ai flow stopped in state FAILED (expected SUCCESS).
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
  24 |   expect(aiResponse).toEqual({
  25 |     status: 'PASS',
  26 |     issues: [],
  27 |   });
  28 | });
  29 | 
```