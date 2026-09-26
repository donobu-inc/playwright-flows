# 🐵 Donobu Test Report

## Summary

| Failed | Timed Out | Interrupted | Did Not Run | Auto-Healed | Flaky | Skipped | Passed |
| - | - | - | - | - | - | - | - |
| 0 ❌ | 0 ⏰ | 0 ⚡ | 0 🚫 | 1 ❤️‍🩹 | 0 🔁 | 2 ⏭️ | 14 ✅ |

_17 tests in 7m 9s_

### ❤️‍🩹 Auto-healed (1)

| Test | Diagnosis |
| --- | --- |
| [unstable-survey.test.ts › Fill out a survey](https://donobu.com/home/demo-flows/flows/54fe22fb-a29a-4ef1-a98a-e5f1939cc80f) _(standalone)_ | **Stale Cached Instructions** — Cached deterministic replay failed because the survey form layout changed and the cached selector for 'Last Name' is not present in the current DOM. |

**[Open the full report →](https://github.com/donobu-inc/playwright-flows/actions/runs/36241331196)**

<details>
<summary>📋 Results by file (12 files)</summary>

| File | Result | Duration |
| --- | --- | --- |
| shopping/auth.setup.ts | 1 ✅ | 13s |
| checkly.test.ts | 1 ✅ | 27s |
| account-signup.test.ts | 1 ✅ | 57s |
| starbucks.test.ts | 1 ✅ | 6s |
| subway-localization.test.ts | 2 ⏭️ | 6s |
| unstable-survey.test.ts | 1 ❤️‍🩹 | 1m 38s |
| virvly-contact.test.ts | 5 ✅ | 1m 10s |
| conversational-bot.test.ts | 1 ✅ | 1m 32s |
| wikipedia-assert.test.ts | 1 ✅ | 16s |
| wikipedia-search.test.ts | 1 ✅ | 9s |
| ycombinator-search.test.ts | 1 ✅ | 10s |
| shopping/cart-checkout.test.ts | 1 ✅ | 18s |

</details>

---

_Run started 2026-09-26T12:16:14.238Z · 4m 59s wall clock · auto-heal merged · [workflow run #779](https://github.com/donobu-inc/playwright-flows/actions/runs/36241331196) · Donobu_
