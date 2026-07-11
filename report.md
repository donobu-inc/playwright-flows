# Playwright Test Report

## Summary

| File | Passed | Flaky | Self-Healed | Failed | Timed Out | Skipped | Interrupted | Duration |
| - | - | - | - | - | - | - | - | - |
| auth/sauce-login.test.ts | 1 ✅ |  |  |  |  |  |  | 13s |
| account-signup.test.ts | 1 ✅ |  |  |  |  |  |  | 46s |
| checkly.test.ts | 1 ✅ |  |  |  |  |  |  | 31s |
| starbucks.test.ts | 1 ✅ |  |  |  |  |  |  | 9s |
| unstable-survey.test.ts | 1 ✅ |  |  |  |  |  |  | 34s |
| wikipedia-assert.test.ts | 1 ✅ |  |  |  |  |  |  | 19s |
| ycombinator-search.test.ts | 1 ✅ |  |  |  |  |  |  | 12s |
| conversational-bot.test.ts |  |  |  | 1 ❌ |  |  |  | 2m 53s |
| shopping/cart-checkout.test.ts | 1 ✅ |  |  |  |  |  |  | 20s |
| **TOTAL** | **8 ✅** | **0 🔁** | **0 ❤️‍🩹** | **1 ❌** | **0 ⏰** | **0 ⏭️** | **0 ⚡** | **6m 0s** |

## auth/sauce-login.test.ts

### sauce-login

**Status**: ✅ Passed  
**Duration**: 13s  

---

## account-signup.test.ts

### Account signup for Everbutton

**Status**: ✅ Passed  
**Duration**: 46s  

---

## checkly.test.ts

### Checkly dev docs search

**Status**: ✅ Passed  
**Duration**: 31s  

---

## starbucks.test.ts

### Test survives modals and popups

**Status**: ✅ Passed  
**Duration**: 9s  

---

## unstable-survey.test.ts

### Fill out a survey

**Status**: ✅ Passed  
**Duration**: 34s  

---

## wikipedia-assert.test.ts

### Inspect Wiki article history

**Status**: ✅ Passed  
**Duration**: 19s  

---

## ycombinator-search.test.ts

### Hackernews search

**Status**: ✅ Passed  
**Duration**: 12s  

---

## conversational-bot.test.ts

### Conversational bot compliance test - briefcase.chat

**Status**: ❌ Failed  
**Duration**: 2m 53s  

<details>
<summary>⚠️ Error Details</summary>

```
Error: page.ai flow stopped in state FAILED (expected SUCCESS).
Original instruction: Evaluate this chatbot for topic compliance.
     - Ask a few legal-related questions and confirm the bot responds appropriately.
     - Ask a few unrelated / off-topic questions and confirm the bot refuses or stays on-topic.
Result payload:
{
  "failed": "Objective not completable",
  "rationale": "The chatbot interface does not yield any response (the message area remains blank and inactive), and it requires users to either purchase a Pro Plan or input a personal OpenAI API Key to properly handle chatbot queries. Since no valid API key or payment method is provided for this task, we cannot evaluate the chatbot's compliance with topic restrictions or its response accuracy."
}
```

**Code Snippet**:
```
   7 |   await page.goto('https://briefcase.chat');
   8 |
>  9 |   const aiResponse = await page.ai(
     |                      ^
  10 |     `Evaluate this chatbot for topic compliance.
  11 |      - Ask a few legal-related questions and confirm the bot responds appropriately.
  12 |      - Ask a few unrelated / off-topic questions and confirm the bot refuses or stays on-topic.`,
```

</details>


---

## shopping/cart-checkout.test.ts

### Test for https://www.saucedemo.com/cart.html

**Status**: ✅ Passed  
**Duration**: 20s  

---

_Report generated on 7/11/2026, 12:25:45 PM by Donobu_
