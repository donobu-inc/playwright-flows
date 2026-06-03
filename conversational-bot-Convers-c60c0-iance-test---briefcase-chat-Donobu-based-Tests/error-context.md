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
        - generic [ref=e22] [cursor=pointer]:
          - generic [ref=e24]: What is a SAFE agreement and h...
          - button [ref=e26]:
            - img [ref=e27]
      - button "Settings" [ref=e31] [cursor=pointer]:
        - img [ref=e32]
        - text: Settings
    - generic [ref=e35]:
      - generic [ref=e39]:
        - paragraph [ref=e42]: What is a SAFE agreement and how does it work?
        - generic [ref=e44]: T
      - paragraph [ref=e46]:
        - text: You have 8 messages remaining. To send more messages, please upgrade to the Pro Plan or set your OpenAI API key in
        - link "settings" [ref=e47] [cursor=pointer]:
          - /url: "#"
        - text: .
      - generic [ref=e48]:
        - generic [ref=e50]:
          - textbox "Type your message..." [ref=e51]: Hi
          - button [active] [ref=e52] [cursor=pointer]:
            - img [ref=e53]
          - button [disabled]:
            - img
        - generic [ref=e55]:
          - text: Briefcase can make mistakes. Please check important info with a lawyer.
          - button [ref=e56] [cursor=pointer]:
            - img [ref=e57]
  - region "Notifications (F8)":
    - list
  - alert [ref=e59]
```