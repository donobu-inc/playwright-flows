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
            - generic [ref=e24]: New Chat
            - button [ref=e26]:
              - img [ref=e27]
          - generic [ref=e30] [cursor=pointer]:
            - generic [ref=e32]: What is a trademark?
            - button [ref=e34]:
              - img [ref=e35]
          - generic [ref=e38] [cursor=pointer]:
            - generic [ref=e40]: What is a trademark?
            - button [ref=e42]:
              - img [ref=e43]
      - button "Settings" [ref=e47] [cursor=pointer]:
        - img [ref=e48]
        - text: Settings
    - generic [ref=e51]:
      - generic [ref=e54]:
        - heading "Welcome to Briefcase" [level=2] [ref=e55]
        - paragraph [ref=e56]: Ask any legal question, summarize documents, and request quotes for more complex inquiries
        - generic [ref=e57]:
          - generic [ref=e58] [cursor=pointer]:
            - generic [ref=e59]: Explain the difference between RSUs and ISOs
            - img [ref=e60]
          - generic [ref=e63] [cursor=pointer]:
            - generic [ref=e64]: When is it better to form an LLC vs. a C-Corp
            - img [ref=e65]
          - generic [ref=e68] [cursor=pointer]:
            - generic [ref=e69]: Summarize the terms of this SAFE agreement
            - img [ref=e70]
          - generic [ref=e73] [cursor=pointer]:
            - generic [ref=e74]: How does non-solicitation work in California
            - img [ref=e75]
      - paragraph [ref=e79]:
        - text: You have 6 messages remaining. To send more messages, please upgrade to the Pro Plan or set your OpenAI API key in
        - link "settings" [ref=e80] [cursor=pointer]:
          - /url: "#"
        - text: .
      - generic [ref=e81]:
        - generic [ref=e83]:
          - textbox "Type your message..." [active] [ref=e84]
          - button [ref=e85] [cursor=pointer]:
            - img [ref=e86]
          - button [disabled]:
            - img
        - generic [ref=e88]:
          - text: Briefcase can make mistakes. Please check important info with a lawyer.
          - button [ref=e89] [cursor=pointer]:
            - img [ref=e90]
  - region "Notifications (F8)":
    - list
  - alert [ref=e92]
```