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
                  - generic:
                    - generic: New Chat
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
                  - paragraph: What is the difference between a copyright and a trademark?
              - generic:
                - generic: T
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
        - generic [ref=e19]:
          - text: Name
          - textbox "Name" [ref=e20]:
            - /placeholder: Enter your name
            - text: Tester
        - generic [ref=e21]:
          - text: Theme
          - combobox "Theme" [ref=e22] [cursor=pointer]:
            - generic: Light
            - img [ref=e23]
        - generic [ref=e25]:
          - text: Language
          - combobox "Language" [ref=e26] [cursor=pointer]:
            - generic: Auto-detect
            - img [ref=e27]
    - button "Close" [ref=e29] [cursor=pointer]:
      - img [ref=e30]
      - generic [ref=e33]: Close
```