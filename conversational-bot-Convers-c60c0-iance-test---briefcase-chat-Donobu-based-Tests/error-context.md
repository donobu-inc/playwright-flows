# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: conversational-bot.test.ts >> Conversational bot compliance test - briefcase.chat
- Location: tests/conversational-bot.test.ts:4:5

# Error details

```
Test timeout of 240000ms exceeded.
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
                    - generic: What is the difference between...
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
                  - paragraph: What is the difference between an LLC and a C-Corp?
              - generic:
                - generic: T
            - generic:
              - generic:
                - generic:
                  - paragraph: What is a trademark?
              - generic:
                - generic: T
      - generic:
        - paragraph:
          - text: You have 8 messages remaining. To send more messages, please upgrade to the Pro Plan or set your OpenAI API key in
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
  - dialog "Settings" [active] [ref=e2]:
    - generic [ref=e3]:
      - heading "Settings" [level=2] [ref=e4]
      - paragraph [ref=e5]: Update your information below
    - generic [ref=e7]:
      - navigation [ref=e8]:
        - button "General" [ref=e9] [cursor=pointer]:
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