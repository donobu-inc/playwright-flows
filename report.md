# Playwright Test Report

## Summary

| File | Passed | Flaky | Self-Healed | Failed | Timed Out | Skipped | Interrupted | Duration |
| - | - | - | - | - | - | - | - | - |
| auth/sauce-login.test.ts | 1 ✅ |  |  |  |  |  |  | 13s |
| checkly.test.ts | 1 ✅ |  |  |  |  |  |  | 31s |
| account-signup.test.ts | 1 ✅ |  |  |  |  |  |  | 50s |
| starbucks.test.ts | 1 ✅ |  |  |  |  |  |  | 9s |
| unstable-survey.test.ts | 1 ✅ |  |  |  |  |  |  | 36s |
| wikipedia-assert.test.ts | 1 ✅ |  |  |  |  |  |  | 21s |
| ycombinator-search.test.ts | 1 ✅ |  |  |  |  |  |  | 12s |
| conversational-bot.test.ts |  |  |  | 1 ❌ |  |  |  | 2m 27s |
| shopping/cart-checkout.test.ts | 1 ✅ |  |  |  |  |  |  | 20s |
| **TOTAL** | **8 ✅** | **0 🔁** | **0 ❤️‍🩹** | **1 ❌** | **0 ⏰** | **0 ⏭️** | **0 ⚡** | **5m 43s** |

## auth/sauce-login.test.ts

### sauce-login

**Status**: ✅ Passed  
**Duration**: 13s  

---

## checkly.test.ts

### Checkly dev docs search

**Status**: ✅ Passed  
**Duration**: 31s  

---

## account-signup.test.ts

### Account signup for Everbutton

**Status**: ✅ Passed  
**Duration**: 50s  

---

## starbucks.test.ts

### Test survives modals and popups

**Status**: ✅ Passed  
**Duration**: 9s  

---

## unstable-survey.test.ts

### Fill out a survey

**Status**: ✅ Passed  
**Duration**: 36s  

---

## wikipedia-assert.test.ts

### Inspect Wiki article history

**Status**: ✅ Passed  
**Duration**: 21s  

---

## ycombinator-search.test.ts

### Hackernews search

**Status**: ✅ Passed  
**Duration**: 12s  

---

## conversational-bot.test.ts

### Conversational bot compliance test - briefcase.chat

**Status**: ❌ Failed  
**Duration**: 2m 27s  

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
  "rationale": "The chatbot does not generate any text responses to submitted questions (both legal-related queries and sample suggestion prompts produce no answer output). Because the AI assistant is unable to produce responses, it is impossible to evaluate its topic compliance or refusal behavior."
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

_Report generated on 8/4/2026, 12:44:58 PM by Donobu_
