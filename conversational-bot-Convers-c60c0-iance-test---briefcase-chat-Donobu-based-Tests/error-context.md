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
            - generic [ref=e24]: What is a SAFE agreement?
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
      - generic [ref=e46]:
        - generic [ref=e47]:
          - paragraph [ref=e50]: What is a SAFE agreement?
          - generic [ref=e52]: J
        - generic [ref=e53]:
          - paragraph [ref=e56]: Explain the difference between RSUs and ISOs
          - generic [ref=e58]: J
        - generic [ref=e59]:
          - paragraph [ref=e62]: What is a SAFE agreement?
          - generic [ref=e64]: J
        - generic [ref=e65]:
          - paragraph [ref=e68]: Explain the difference between RSUs and ISOs
          - generic [ref=e70]: J
      - paragraph [ref=e72]:
        - text: You have 5 messages remaining. To send more messages, please upgrade to the Pro Plan or set your OpenAI API key in
        - link "settings" [ref=e73] [cursor=pointer]:
          - /url: "#"
        - text: .
      - generic [ref=e74]:
        - generic [ref=e76]:
          - textbox "Type your message..." [active] [ref=e77]
          - button [ref=e78] [cursor=pointer]:
            - img [ref=e79]
          - button [disabled]:
            - img
        - generic [ref=e81]:
          - text: Briefcase can make mistakes. Please check important info with a lawyer.
          - button [ref=e82] [cursor=pointer]:
            - img [ref=e83]
  - region "Notifications (F8)":
    - list
  - alert [ref=e85]
```