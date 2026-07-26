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
  "rationale": "The chatbot requires an OpenAI API Key or a Pro Plan subscription to generate responses. Without an API key or active subscription, the bot does not generate answers to legal or off-topic questions, making it impossible to evaluate its topic compliance."
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
                    - generic: New Chat
                  - generic:
                    - button:
                      - img
                - generic:
                  - generic:
                    - generic: What are the essential element...
                  - generic:
                    - button:
                      - img
        - generic:
          - button:
            - img
            - text: Settings
    - generic:
      - generic [ref=e1]:
        - heading [level=2] [ref=e2]: Welcome to Briefcase
        - paragraph [ref=e3]: Ask any legal question, summarize documents, and request quotes for more complex inquiries
        - generic [ref=e4]:
          - generic [ref=e5] [cursor=pointer]:
            - generic [ref=e6]: Explain the difference between RSUs and ISOs
            - img [ref=e7]
          - generic [ref=e10] [cursor=pointer]:
            - generic [ref=e11]: When is it better to form an LLC vs. a C-Corp
            - img [ref=e12]
          - generic [ref=e15] [cursor=pointer]:
            - generic [ref=e16]: Summarize the terms of this SAFE agreement
            - img [ref=e17]
          - generic [ref=e20] [cursor=pointer]:
            - generic [ref=e21]: How does non-solicitation work in California
            - img [ref=e22]
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
  - dialog "Settings" [active] [ref=e26]:
    - generic [ref=e27]:
      - heading "Settings" [level=2] [ref=e28]
      - paragraph [ref=e29]: Update your information below
    - generic [ref=e31]:
      - navigation [ref=e32]:
        - button "General" [ref=e33] [cursor=pointer]:
          - img [ref=e34]
          - generic [ref=e37]: General
        - button "Advanced" [ref=e38] [cursor=pointer]:
          - img [ref=e39]
          - generic [ref=e40]: Advanced
      - generic [ref=e42]:
        - generic [ref=e43]: Briefcase has a limit of 10 messages per user. To send more messages, please upgrade to the Pro Plan or set your OpenAI API key.
        - generic [ref=e44]:
          - generic [ref=e45]:
            - generic [ref=e46]: Email
            - button [ref=e47] [cursor=pointer]:
              - img [ref=e48]
          - generic [ref=e50]:
            - textbox "Enter your email" [ref=e51]
            - button "Upgrade" [disabled]
          - paragraph [ref=e53]:
            - link "Already have a subscription?" [ref=e54] [cursor=pointer]:
              - /url: "#"
        - generic [ref=e55]:
          - generic [ref=e56]:
            - generic [ref=e57]: OpenAI API Key
            - button [ref=e58] [cursor=pointer]:
              - img [ref=e59]
          - generic [ref=e61]:
            - textbox "OpenAI API Key" [ref=e62]:
              - /placeholder: Enter your OpenAI API Key
            - button "Apply" [disabled]
        - generic [ref=e63]:
          - generic [ref=e64]: Conversation History
          - generic [ref=e65]:
            - paragraph [ref=e66]: Delete all conversations and messages. This action cannot be undone.
            - button "Delete" [ref=e67] [cursor=pointer]
    - button "Close" [ref=e68] [cursor=pointer]:
      - img [ref=e69]
      - generic [ref=e72]: Close
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