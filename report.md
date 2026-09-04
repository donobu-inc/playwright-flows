# 🐵 Donobu Test Report

## Summary

| Failed | Timed Out | Interrupted | Did Not Run | Auto-Healed | Flaky | Skipped | Passed |
| - | - | - | - | - | - | - | - |
| 0 ❌ | 0 ⏰ | 0 ⚡ | 0 🚫 | 1 ❤️‍🩹 | 0 🔁 | 0 ⏭️ | 8 ✅ |

_9 tests in 6m 11s_

### ❤️‍🩹 Auto-healed (1)

| Test | Diagnosis |
| --- | --- |
| [unstable-survey.test.ts › Fill out a survey](https://donobu.com/home/me/flows/38202c01-4114-4193-b777-07088509df33) _(standalone)_ | **Stale Cached Instructions** — Page.ai deterministic cache replay failed because the live survey form fields ('Your Name *', 'Contact Email *') differ from the cached selectors ('Last Name *… |

**[Open the full report →](https://github.com/donobu-inc/playwright-flows/actions/runs/33871969418)**

<details>
<summary>📋 Results by file (9 files)</summary>

| File | Result | Duration |
| --- | --- | --- |
| shopping/auth.setup.ts | 1 ✅ | 14s |
| checkly.test.ts | 1 ✅ | 28s |
| account-signup.test.ts | 1 ✅ | 1m 0s |
| starbucks.test.ts | 1 ✅ | 7s |
| unstable-survey.test.ts | 1 ❤️‍🩹 | 1m 45s |
| wikipedia-assert.test.ts | 1 ✅ | 21s |
| ycombinator-search.test.ts | 1 ✅ | 11s |
| conversational-bot.test.ts | 1 ✅ | 1m 43s |
| shopping/cart-checkout.test.ts | 1 ✅ | 19s |

</details>

---

_Run started 2026-09-04T12:17:51.419Z · 4m 49s wall clock · auto-heal merged · [workflow run #727](https://github.com/donobu-inc/playwright-flows/actions/runs/33871969418) · Donobu_
