# 🐵 Donobu Test Report

## Summary

| Failed | Timed Out | Interrupted | Did Not Run | Auto-Healed | Flaky | Skipped | Passed |
| - | - | - | - | - | - | - | - |
| 0 ❌ | 0 ⏰ | 0 ⚡ | 0 🚫 | 1 ❤️‍🩹 | 0 🔁 | 0 ⏭️ | 9 ✅ |

_10 tests in 5m 48s_

### ❤️‍🩹 Auto-healed (1)

| Test | Diagnosis |
| --- | --- |
| [unstable-survey.test.ts › Fill out a survey](https://donobu.com/home/demo-flows/flows/b38da47d-8194-438c-aa21-34edf04f7a45) _(standalone)_ | **Stale Cached Instructions** — Cached replay failed to locate 'Last Name' input field because the survey form rendered a different layout/set of fields ('Your Name', 'Contact Email'). |

**[Open the full report →](https://github.com/donobu-inc/playwright-flows/actions/runs/35343749731)**

<details>
<summary>📋 Results by file (10 files)</summary>

| File | Result | Duration |
| --- | --- | --- |
| shopping/auth.setup.ts | 1 ✅ | 14s |
| checkly.test.ts | 1 ✅ | 31s |
| account-signup.test.ts | 1 ✅ | 52s |
| starbucks.test.ts | 1 ✅ | 7s |
| unstable-survey.test.ts | 1 ❤️‍🩹 | 1m 22s |
| wikipedia-assert.test.ts | 1 ✅ | 17s |
| wikipedia-search.test.ts | 1 ✅ | 8s |
| ycombinator-search.test.ts | 1 ✅ | 10s |
| conversational-bot.test.ts | 1 ✅ | 1m 44s |
| shopping/cart-checkout.test.ts | 1 ✅ | 18s |

</details>

---

_Run started 2026-09-18T12:17:12.438Z · 4m 28s wall clock · auto-heal merged · [workflow run #760](https://github.com/donobu-inc/playwright-flows/actions/runs/35343749731) · Donobu_
