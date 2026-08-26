# 🐵 Donobu Test Report

## Summary

| Failed | Timed Out | Interrupted | Did Not Run | Auto-Healed | Flaky | Skipped | Passed |
| - | - | - | - | - | - | - | - |
| 0 ❌ | 0 ⏰ | 0 ⚡ | 0 🚫 | 1 ❤️‍🩹 | 0 🔁 | 0 ⏭️ | 8 ✅ |

_9 tests in 7m 16s_

### ❤️‍🩹 Auto-healed (1)

| Test | Diagnosis |
| --- | --- |
| [unstable-survey.test.ts › Fill out a survey](https://donobu.com/home/me/flows/e58102c9-8231-406f-aac5-854f1d736653) _(standalone)_ | **Stale Cached Instructions** — Deterministic replay failed because the survey form fields changed (e.g. 'Your Name' instead of 'Last Name'), causing cached page.ai selectors to fail. |

**[Open the full report →](https://github.com/donobu-inc/playwright-flows/actions/runs/33015816264)**

<details>
<summary>📋 Results by file (9 files)</summary>

| File | Result | Duration |
| --- | --- | --- |
| shopping/auth.setup.ts | 1 ✅ | 17s |
| checkly.test.ts | 1 ✅ | 34s |
| account-signup.test.ts | 1 ✅ | 1m 10s |
| starbucks.test.ts | 1 ✅ | 13s |
| unstable-survey.test.ts | 1 ❤️‍🩹 | 2m 0s |
| wikipedia-assert.test.ts | 1 ✅ | 23s |
| ycombinator-search.test.ts | 1 ✅ | 13s |
| conversational-bot.test.ts | 1 ✅ | 1m 59s |
| shopping/cart-checkout.test.ts | 1 ✅ | 23s |

</details>

---

_Run started 2026-08-26T21:33:31.646Z · 5m 31s wall clock · auto-heal merged · [workflow run #711](https://github.com/donobu-inc/playwright-flows/actions/runs/33015816264) · Donobu_
