# Playwright Test Report

## Summary

| File | Passed | Flaky | Self-Healed | Failed | Timed Out | Skipped | Interrupted | Duration |
| - | - | - | - | - | - | - | - | - |
| auth/sauce-login.test.ts | 1 ✅ |  |  |  |  |  |  | 13s |
| checkly.test.ts | 1 ✅ |  |  |  |  |  |  | 34s |
| account-signup.test.ts | 1 ✅ |  |  |  |  |  |  | 56s |
| starbucks.test.ts | 1 ✅ |  |  |  |  |  |  | 9s |
| unstable-survey.test.ts | 1 ✅ |  |  |  |  |  |  | 37s |
| wikipedia-assert.test.ts | 1 ✅ |  |  |  |  |  |  | 21s |
| ycombinator-search.test.ts | 1 ✅ |  |  |  |  |  |  | 13s |
| conversational-bot.test.ts |  |  |  | 1 ❌ |  |  |  | 2m 54s |
| shopping/cart-checkout.test.ts | 1 ✅ |  |  |  |  |  |  | 21s |
| **TOTAL** | **8 ✅** | **0 🔁** | **0 ❤️‍🩹** | **1 ❌** | **0 ⏰** | **0 ⏭️** | **0 ⚡** | **6m 22s** |

## auth/sauce-login.test.ts

### sauce-login

**Status**: ✅ Passed  
**Duration**: 13s  

---

## checkly.test.ts

### Checkly dev docs search

**Status**: ✅ Passed  
**Duration**: 34s  

---

## account-signup.test.ts

### Account signup for Everbutton

**Status**: ✅ Passed  
**Duration**: 56s  

---

## starbucks.test.ts

### Test survives modals and popups

**Status**: ✅ Passed  
**Duration**: 9s  

---

## unstable-survey.test.ts

### Fill out a survey

**Status**: ✅ Passed  
**Duration**: 37s  

---

## wikipedia-assert.test.ts

### Inspect Wiki article history

**Status**: ✅ Passed  
**Duration**: 21s  

---

## ycombinator-search.test.ts

### Hackernews search

**Status**: ✅ Passed  
**Duration**: 13s  

---

## conversational-bot.test.ts

### Conversational bot compliance test - briefcase.chat

**Status**: ❌ Failed  
**Duration**: 2m 54s  

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
  "rationale": "The chatbot functionality is currently unavailable or unconfigured (requires an OpenAI API key or active backend service), preventing the bot from rendering responses to both legal and off-topic questions. Consequently, topic compliance cannot be evaluated."
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

_Report generated on 7/31/2026, 12:46:05 PM by Donobu_
