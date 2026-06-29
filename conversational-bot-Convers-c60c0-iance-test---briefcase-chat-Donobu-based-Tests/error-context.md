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
          - generic [ref=e24]: What is a SAFE agreement?
          - button [ref=e26]:
            - img [ref=e27]
      - button "Settings" [ref=e31] [cursor=pointer]:
        - img [ref=e32]
        - text: Settings
    - generic [ref=e35]:
      - generic [ref=e38]:
        - generic [ref=e39]:
          - paragraph [ref=e42]: What is a SAFE agreement?
          - generic [ref=e44]: T
        - generic [ref=e45]:
          - paragraph [ref=e48]: Explain the difference between RSUs and ISOs
          - generic [ref=e50]: T
        - generic [ref=e51]:
          - paragraph [ref=e54]: What is a SAFE agreement?
          - generic [ref=e56]: T
      - paragraph [ref=e58]:
        - text: You have 6 messages remaining. To send more messages, please upgrade to the Pro Plan or set your OpenAI API key in
        - link "settings" [ref=e59] [cursor=pointer]:
          - /url: "#"
        - text: .
      - generic [ref=e60]:
        - generic [ref=e62]:
          - textbox "Type your message..." [ref=e63]: When is it better to form an LLC vs. a C-Corp?
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