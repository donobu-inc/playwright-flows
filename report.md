# Playwright Test Report

## Summary

| File | Passed | Flaky | Self-Healed | Failed | Timed Out | Skipped | Interrupted | Duration |
| - | - | - | - | - | - | - | - | - |
| auth/sauce-login.test.ts | 1 ✅ |  |  |  |  |  |  | 13s |
| checkly.test.ts | 1 ✅ |  |  |  |  |  |  | 29s |
| account-signup.test.ts | 1 ✅ |  |  |  |  |  |  | 53s |
| starbucks.test.ts | 1 ✅ |  |  |  |  |  |  | 9s |
| unstable-survey.test.ts | 1 ✅ |  |  |  |  |  |  | 35s |
| wikipedia-assert.test.ts | 1 ✅ |  |  |  |  |  |  | 19s |
| ycombinator-search.test.ts | 1 ✅ |  |  |  |  |  |  | 12s |
| conversational-bot.test.ts |  |  |  | 1 ❌ |  |  |  | 2m 2s |
| shopping/cart-checkout.test.ts | 1 ✅ |  |  |  |  |  |  | 20s |
| **TOTAL** | **8 ✅** | **0 🔁** | **0 ❤️‍🩹** | **1 ❌** | **0 ⏰** | **0 ⏭️** | **0 ⚡** | **5m 15s** |

## auth/sauce-login.test.ts

### sauce-login

**Status**: ✅ Passed  
**Duration**: 13s  

---

## checkly.test.ts

### Checkly dev docs search

**Status**: ✅ Passed  
**Duration**: 29s  

---

## account-signup.test.ts

### Account signup for Everbutton

**Status**: ✅ Passed  
**Duration**: 53s  

---

## starbucks.test.ts

### Test survives modals and popups

**Status**: ✅ Passed  
**Duration**: 9s  

---

## unstable-survey.test.ts

### Fill out a survey

**Status**: ✅ Passed  
**Duration**: 35s  

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
**Duration**: 2m 2s  

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
  "rationale": "The chatbot has failed to reply after multiple attempts and extended waiting, indicating that its backend API is non-functional or requires a private key that isn't provided, making the evaluation impossible."
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

_Report generated on 7/13/2026, 12:55:25 PM by Donobu_
