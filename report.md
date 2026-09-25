# 🐵 Donobu Test Report

## Summary

| Failed | Timed Out | Interrupted | Did Not Run | Auto-Healed | Flaky | Skipped | Passed |
| - | - | - | - | - | - | - | - |
| 0 ❌ | 0 ⏰ | 0 ⚡ | 0 🚫 | 1 ❤️‍🩹 | 0 🔁 | 2 ⏭️ | 14 ✅ |

_17 tests in 6m 56s_

### ❤️‍🩹 Auto-healed (1)

| Test | Diagnosis |
| --- | --- |
| [unstable-survey.test.ts › Fill out a survey](https://donobu.com/home/demo-flows/flows/baca06b0-2a82-4a65-9f0a-7c1b3fca5882) _(standalone)_ | **Stale Cached Instructions** — Cached page.ai step failed to find 'Last Name' field because the dynamic survey form loaded with different fields ('Your Name', 'Contact Email'). |

**[Open the full report →](https://github.com/donobu-inc/playwright-flows/actions/runs/36134068493)**

<details>
<summary>📋 Results by file (12 files)</summary>

| File | Result | Duration |
| --- | --- | --- |
| shopping/auth.setup.ts | 1 ✅ | 15s |
| checkly.test.ts | 1 ✅ | 29s |
| account-signup.test.ts | 1 ✅ | 54s |
| starbucks.test.ts | 1 ✅ | 8s |
| subway-localization.test.ts | 2 ⏭️ | 6s |
| unstable-survey.test.ts | 1 ❤️‍🩹 | 1m 17s |
| virvly-contact.test.ts | 5 ✅ | 1m 14s |
| conversational-bot.test.ts | 1 ✅ | 1m 32s |
| wikipedia-assert.test.ts | 1 ✅ | 17s |
| wikipedia-search.test.ts | 1 ✅ | 9s |
| ycombinator-search.test.ts | 1 ✅ | 10s |
| shopping/cart-checkout.test.ts | 1 ✅ | 19s |

</details>

---

_Run started 2026-09-25T12:18:21.349Z · 4m 40s wall clock · auto-heal merged · [workflow run #777](https://github.com/donobu-inc/playwright-flows/actions/runs/36134068493) · Donobu_
