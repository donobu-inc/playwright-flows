# 🐵 Donobu Test Report

## Summary

| Failed | Timed Out | Interrupted | Did Not Run | Auto-Healed | Flaky | Skipped | Passed |
| - | - | - | - | - | - | - | - |
| 0 ❌ | 0 ⏰ | 0 ⚡ | 0 🚫 | 1 ❤️‍🩹 | 0 🔁 | 0 ⏭️ | 14 ✅ |

_15 tests in 6m 52s_

### ❤️‍🩹 Auto-healed (1)

| Test | Diagnosis |
| --- | --- |
| [unstable-survey.test.ts › Fill out a survey](https://donobu.com/home/demo-flows/flows/06476ab0-ba5b-4ee3-80e5-4d189e42d031) _(standalone)_ | **Stale Cached Instructions** — Deterministic cache replay failed to locate the 'Last Name' input field because the survey form dynamically shifted fields to 'Your Name'. |

**[Open the full report →](https://github.com/donobu-inc/playwright-flows/actions/runs/35598591099)**

<details>
<summary>📋 Results by file (11 files)</summary>

| File | Result | Duration |
| --- | --- | --- |
| shopping/auth.setup.ts | 1 ✅ | 15s |
| checkly.test.ts | 1 ✅ | 28s |
| account-signup.test.ts | 1 ✅ | 51s |
| starbucks.test.ts | 1 ✅ | 7s |
| unstable-survey.test.ts | 1 ❤️‍🩹 | 1m 23s |
| virvly-contact.test.ts | 5 ✅ | 1m 14s |
| conversational-bot.test.ts | 1 ✅ | 1m 31s |
| wikipedia-assert.test.ts | 1 ✅ | 19s |
| wikipedia-search.test.ts | 1 ✅ | 9s |
| ycombinator-search.test.ts | 1 ✅ | 11s |
| shopping/cart-checkout.test.ts | 1 ✅ | 19s |

</details>

---

_Run started 2026-09-21T12:17:21.436Z · 4m 44s wall clock · auto-heal merged · [workflow run #768](https://github.com/donobu-inc/playwright-flows/actions/runs/35598591099) · Donobu_
