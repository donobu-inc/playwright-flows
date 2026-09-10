# 🐵 Donobu Test Report

## Summary

| Failed | Timed Out | Interrupted | Did Not Run | Auto-Healed | Flaky | Skipped | Passed |
| - | - | - | - | - | - | - | - |
| 0 ❌ | 0 ⏰ | 0 ⚡ | 0 🚫 | 1 ❤️‍🩹 | 0 🔁 | 0 ⏭️ | 8 ✅ |

_9 tests in 5m 53s_

### ❤️‍🩹 Auto-healed (1)

| Test | Diagnosis |
| --- | --- |
| [unstable-survey.test.ts › Fill out a survey](https://donobu.com/home/me/flows/27e12a42-1c41-47df-bf1a-9084ca3e0d6c) _(standalone)_ | **Stale Cached Instructions** — Cached page.ai replay failed to locate 'Last Name' input because the live survey form presents different fields ('Your Name', 'Contact Email', 'Occupation'). |

**[Open the full report →](https://github.com/donobu-inc/playwright-flows/actions/runs/34475793983)**

<details>
<summary>📋 Results by file (9 files)</summary>

| File | Result | Duration |
| --- | --- | --- |
| shopping/auth.setup.ts | 1 ✅ | 13s |
| checkly.test.ts | 1 ✅ | 27s |
| account-signup.test.ts | 1 ✅ | 56s |
| starbucks.test.ts | 1 ✅ | 6s |
| unstable-survey.test.ts | 1 ❤️‍🩹 | 1m 38s |
| wikipedia-assert.test.ts | 1 ✅ | 16s |
| ycombinator-search.test.ts | 1 ✅ | 10s |
| conversational-bot.test.ts | 1 ✅ | 1m 44s |
| shopping/cart-checkout.test.ts | 1 ✅ | 18s |

</details>

---

_Run started 2026-09-10T12:17:28.407Z · 4m 36s wall clock · auto-heal merged · [workflow run #739](https://github.com/donobu-inc/playwright-flows/actions/runs/34475793983) · Donobu_
