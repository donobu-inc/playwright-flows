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
          - generic [ref=e24]: What is the difference between...
          - button [ref=e26]:
            - img [ref=e27]
      - button "Settings" [ref=e31] [cursor=pointer]:
        - img [ref=e32]
        - text: Settings
    - generic [ref=e35]:
      - generic [ref=e38]:
        - heading "Welcome to Briefcase" [level=2] [ref=e39]
        - paragraph [ref=e40]: Ask any legal question, summarize documents, and request quotes for more complex inquiries
        - generic [ref=e41]:
          - generic [ref=e42] [cursor=pointer]:
            - generic [ref=e43]: Explain the difference between RSUs and ISOs
            - img [ref=e44]
          - generic [ref=e47] [cursor=pointer]:
            - generic [ref=e48]: When is it better to form an LLC vs. a C-Corp
            - img [ref=e49]
          - generic [ref=e52] [cursor=pointer]:
            - generic [ref=e53]: Summarize the terms of this SAFE agreement
            - img [ref=e54]
          - generic [ref=e57] [cursor=pointer]:
            - generic [ref=e58]: How does non-solicitation work in California
            - img [ref=e59]
      - paragraph [ref=e63]:
        - text: You have 8 messages remaining. To send more messages, please upgrade to the Pro Plan or set your OpenAI API key in
        - link "settings" [ref=e64] [cursor=pointer]:
          - /url: "#"
        - text: .
      - generic [ref=e65]:
        - generic [ref=e67]:
          - textbox "Type your message..." [active] [ref=e68]
          - button [ref=e69] [cursor=pointer]:
            - img [ref=e70]
          - button [disabled]:
            - img
        - generic [ref=e72]:
          - text: Briefcase can make mistakes. Please check important info with a lawyer.
          - button [ref=e73] [cursor=pointer]:
            - img [ref=e74]
  - region "Notifications (F8)":
    - list
  - alert [ref=e76]
```