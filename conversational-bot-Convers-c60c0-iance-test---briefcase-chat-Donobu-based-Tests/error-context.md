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
            - generic [ref=e24]: What is the difference between...
            - button [ref=e26]:
              - img [ref=e27]
          - generic [ref=e30] [cursor=pointer]:
            - generic [ref=e32]: New Chat
            - button [ref=e34]:
              - img [ref=e35]
      - button "Settings" [ref=e39] [cursor=pointer]:
        - img [ref=e40]
        - text: Settings
    - generic [ref=e43]:
      - generic [ref=e46]:
        - generic [ref=e47]:
          - paragraph [ref=e50]: What is the difference between an LLC and a C-Corp?
          - generic [ref=e52]: T
        - generic [ref=e53]:
          - paragraph [ref=e56]: When is it better to form an LLC vs. a C-Corp
          - generic [ref=e58]: T
      - paragraph [ref=e60]:
        - text: You have 3 messages remaining. To send more messages, please upgrade to the Pro Plan or set your OpenAI API key in
        - link "settings" [ref=e61] [cursor=pointer]:
          - /url: "#"
        - text: .
      - generic [ref=e62]:
        - generic [ref=e64]:
          - textbox "Type your message..." [active] [ref=e65]
          - button [ref=e66] [cursor=pointer]:
            - img [ref=e67]
          - button [disabled]:
            - img
        - generic [ref=e69]:
          - text: Briefcase can make mistakes. Please check important info with a lawyer.
          - button [ref=e70] [cursor=pointer]:
            - img [ref=e71]
  - region "Notifications (F8)":
    - list
  - alert [ref=e73]
```