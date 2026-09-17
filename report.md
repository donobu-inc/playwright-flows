# 🐵 Donobu Test Report

## Summary

| Failed | Timed Out | Interrupted | Did Not Run | Auto-Healed | Flaky | Skipped | Passed |
| - | - | - | - | - | - | - | - |
| 0 ❌ | 0 ⏰ | 0 ⚡ | 0 🚫 | 1 ❤️‍🩹 | 0 🔁 | 0 ⏭️ | 8 ✅ |

_9 tests in 7m 36s_

### ❤️‍🩹 Auto-healed (1)

| Test | Diagnosis |
| --- | --- |
| [unstable-survey.test.ts › Fill out a survey](https://donobu.com/home/me/flows/c07ad77b-55c8-4ba7-9fb0-40385da41d83) _(standalone)_ | **Stale Cached Instructions** — Cached page.ai replay failed to locate the 'Last Name' field because the live survey form currently displays different fields ('Your Name', 'Contact Email'). |

**[Open the full report →](https://github.com/donobu-inc/playwright-flows/actions/runs/35220201523)**

<details>
<summary>📋 Results by file (9 files)</summary>

| File | Result | Duration |
| --- | --- | --- |
| shopping/auth.setup.ts | 1 ✅ | 14s |
| checkly.test.ts | 1 ✅ | 29s |
| account-signup.test.ts | 1 ✅ | 56s |
| starbucks.test.ts | 1 ✅ | 7s |
| unstable-survey.test.ts | 1 ❤️‍🩹 | 3m 6s |
| wikipedia-assert.test.ts | 1 ✅ | 21s |
| ycombinator-search.test.ts | 1 ✅ | 11s |
| conversational-bot.test.ts | 1 ✅ | 1m 50s |
| shopping/cart-checkout.test.ts | 1 ✅ | 19s |

</details>

---

_Run started 2026-09-17T12:17:49.857Z · 6m 18s wall clock · auto-heal merged · [workflow run #753](https://github.com/donobu-inc/playwright-flows/actions/runs/35220201523) · Donobu_
