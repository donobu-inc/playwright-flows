# 🐵 Donobu Test Report

## Summary

| Failed | Timed Out | Interrupted | Did Not Run | Auto-Healed | Flaky | Skipped | Passed |
| - | - | - | - | - | - | - | - |
| 0 ❌ | 0 ⏰ | 0 ⚡ | 0 🚫 | 1 ❤️‍🩹 | 0 🔁 | 0 ⏭️ | 8 ✅ |

_9 tests in 5m 39s_

### ❤️‍🩹 Auto-healed (1)

| Test | Diagnosis |
| --- | --- |
| [unstable-survey.test.ts › Fill out a survey](https://donobu.com/home/me/flows/74d607ce-4d86-49c6-9939-221d848592e7) _(standalone)_ | **Stale Cached Instructions** — The test failed during deterministic cache replay because the survey form fields changed (from 'Last Name' to 'Your Name'), causing cached selectors to fail. |

**[Open the full report →](https://github.com/donobu-inc/playwright-flows/actions/runs/34032512345)**

<details>
<summary>📋 Results by file (9 files)</summary>

| File | Result | Duration |
| --- | --- | --- |
| shopping/auth.setup.ts | 1 ✅ | 14s |
| checkly.test.ts | 1 ✅ | 27s |
| account-signup.test.ts | 1 ✅ | 58s |
| starbucks.test.ts | 1 ✅ | 6s |
| unstable-survey.test.ts | 1 ❤️‍🩹 | 1m 31s |
| wikipedia-assert.test.ts | 1 ✅ | 16s |
| ycombinator-search.test.ts | 1 ✅ | 10s |
| conversational-bot.test.ts | 1 ✅ | 1m 37s |
| shopping/cart-checkout.test.ts | 1 ✅ | 16s |

</details>

---

_Run started 2026-09-06T12:15:22.853Z · 4m 25s wall clock · auto-heal merged · [workflow run #731](https://github.com/donobu-inc/playwright-flows/actions/runs/34032512345) · Donobu_
