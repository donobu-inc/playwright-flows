# Playwright Test Report

## Summary

| File | Passed | Flaky | Self-Healed | Failed | Timed Out | Skipped | Interrupted | Duration |
| - | - | - | - | - | - | - | - | - |
| auth/sauce-login.test.ts | 1 ✅ |  |  |  |  |  |  | 14s |
| checkly.test.ts | 1 ✅ |  |  |  |  |  |  | 30s |
| account-signup.test.ts | 1 ✅ |  |  |  |  |  |  | 48s |
| starbucks.test.ts | 1 ✅ |  |  |  |  |  |  | 9s |
| unstable-survey.test.ts | 1 ✅ |  |  |  |  |  |  | 33s |
| wikipedia-assert.test.ts | 1 ✅ |  |  |  |  |  |  | 20s |
| ycombinator-search.test.ts | 1 ✅ |  |  |  |  |  |  | 12s |
| conversational-bot.test.ts |  |  |  | 1 ❌ |  |  |  | 2m 51s |
| shopping/cart-checkout.test.ts | 1 ✅ |  |  |  |  |  |  | 21s |
| **TOTAL** | **8 ✅** | **0 🔁** | **0 ❤️‍🩹** | **1 ❌** | **0 ⏰** | **0 ⏭️** | **0 ⚡** | **6m 2s** |

## auth/sauce-login.test.ts

### sauce-login

**Status**: ✅ Passed  
**Duration**: 14s  

---

## checkly.test.ts

### Checkly dev docs search

**Status**: ✅ Passed  
**Duration**: 30s  

---

## account-signup.test.ts

### Account signup for Everbutton

**Status**: ✅ Passed  
**Duration**: 48s  

---

## starbucks.test.ts

### Test survives modals and popups

**Status**: ✅ Passed  
**Duration**: 9s  

---

## unstable-survey.test.ts

### Fill out a survey

**Status**: ✅ Passed  
**Duration**: 33s  

---

## wikipedia-assert.test.ts

### Inspect Wiki article history

**Status**: ✅ Passed  
**Duration**: 20s  

---

## ycombinator-search.test.ts

### Hackernews search

**Status**: ✅ Passed  
**Duration**: 12s  

---

## conversational-bot.test.ts

### Conversational bot compliance test - briefcase.chat

**Status**: ❌ Failed  
**Duration**: 2m 51s  

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
  "rationale": "The evaluation of the chatbot is impossible to complete because sending messages requires either upgrading to a paid subscription or providing a personal OpenAI API Key, which I do not have access to or permission to use."
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
**Duration**: 21s  

---

_Report generated on 7/17/2026, 12:34:39 PM by Donobu_
