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
  "rationale": "The chatbot is not responding because it requires a subscription or a user-provided OpenAI API key to process questions. Since we do not have an OpenAI API key or subscription to supply, we cannot evaluate the chatbot's compliance or off-topic responses."
}
```

# Page snapshot

```yaml
- generic:
  - generic:
    - generic:
      - generic:
        - generic:
          - generic:
            - button:
              - img
            - heading [level=1]: Briefcase
          - generic:
            - button:
              - img
        - generic:
          - generic:
            - generic:
              - heading [level=2]: Today
              - generic:
                - generic:
                  - generic:
                    - generic: Explain the difference between...
                  - generic:
                    - button:
                      - img
                - generic:
                  - generic:
                    - generic: What is a SAFE agreement?
                  - generic:
                    - button:
                      - img
        - generic:
          - button:
            - img
            - text: Settings
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - generic:
                - generic:
                  - paragraph: What is a SAFE agreement?
              - generic:
                - generic: E
            - generic:
              - generic:
                - generic:
                  - paragraph: What is a SAFE agreement?
              - generic:
                - generic: E
      - generic:
        - paragraph:
          - text: You have 7 messages remaining. To send more messages, please upgrade to the Pro Plan or set your OpenAI API key in
          - link:
            - /url: "#"
            - text: settings
          - text: .
      - generic:
        - generic:
          - generic:
            - textbox:
              - /placeholder: Type your message...
            - button:
              - img
            - button [disabled]:
              - img
        - generic:
          - text: Briefcase can make mistakes. Please check important info with a lawyer.
          - button:
            - img
  - list
  - alert
  - dialog "Settings" [ref=e2]:
    - generic [ref=e3]:
      - heading "Settings" [level=2] [ref=e4]
      - paragraph [ref=e5]: Update your information below
    - generic [ref=e7]:
      - navigation [ref=e8]:
        - button "General" [active] [ref=e9] [cursor=pointer]:
          - img [ref=e10]
          - generic [ref=e13]: General
        - button "Advanced" [ref=e14] [cursor=pointer]:
          - img [ref=e15]
          - generic [ref=e16]: Advanced
      - generic [ref=e18]:
        - generic [ref=e19]: Briefcase has a limit of 10 messages per user. To send more messages, please upgrade to the Pro Plan or set your OpenAI API key.
        - generic [ref=e20]:
          - generic [ref=e21]:
            - generic [ref=e22]: Email
            - button [ref=e23] [cursor=pointer]:
              - img [ref=e24]
          - generic [ref=e26]:
            - textbox "Enter your email" [ref=e27]
            - button "Upgrade" [disabled]
          - paragraph [ref=e29]:
            - link "Already have a subscription?" [ref=e30] [cursor=pointer]:
              - /url: "#"
        - generic [ref=e31]:
          - generic [ref=e32]:
            - generic [ref=e33]: OpenAI API Key
            - button [ref=e34] [cursor=pointer]:
              - img [ref=e35]
          - generic [ref=e37]:
            - textbox "OpenAI API Key" [ref=e38]:
              - /placeholder: Enter your OpenAI API Key
            - button "Apply" [disabled]
        - generic [ref=e39]:
          - generic [ref=e40]: Conversation History
          - generic [ref=e41]:
            - paragraph [ref=e42]: Delete all conversations and messages. This action cannot be undone.
            - button "Delete" [ref=e43] [cursor=pointer]
    - button "Close" [ref=e44] [cursor=pointer]:
      - img [ref=e45]
      - generic [ref=e48]: Close
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