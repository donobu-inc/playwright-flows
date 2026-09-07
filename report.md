# 🐵 Donobu Test Report

## Summary

| Failed | Timed Out | Interrupted | Did Not Run | Auto-Healed | Flaky | Skipped | Passed |
| - | - | - | - | - | - | - | - |
| 0 ❌ | 0 ⏰ | 0 ⚡ | 0 🚫 | 1 ❤️‍🩹 | 0 🔁 | 0 ⏭️ | 8 ✅ |

_9 tests in 5m 12s_

### ❤️‍🩹 Auto-healed (1)

| Test | Diagnosis |
| --- | --- |
| [unstable-survey.test.ts › Fill out a survey](https://donobu.com/home/me/flows/8445550a-f149-4ee3-bf88-c7f5515b232d) _(standalone)_ | **Stale Cached Instructions** — Page.AI deterministic cache replay failed to find the 'Last Name *' input field because the survey form fields have changed on the live page. |

**[Open the full report →](https://github.com/donobu-inc/playwright-flows/actions/runs/34121057397)**

<details>
<summary>📋 Results by file (9 files)</summary>

| File | Result | Duration |
| --- | --- | --- |
| shopping/auth.setup.ts | 1 ✅ | 13s |
| checkly.test.ts | 1 ✅ | 27s |
| account-signup.test.ts | 1 ✅ | 56s |
| starbucks.test.ts | 1 ✅ | 6s |
| unstable-survey.test.ts | 1 ❤️‍🩹 | 1m 14s |
| wikipedia-assert.test.ts | 1 ✅ | 15s |
| ycombinator-search.test.ts | 1 ✅ | 10s |
| conversational-bot.test.ts | 1 ✅ | 1m 31s |
| shopping/cart-checkout.test.ts | 1 ✅ | 17s |

</details>

---

_Run started 2026-09-07T12:18:09.779Z · 3m 58s wall clock · auto-heal merged · [workflow run #733](https://github.com/donobu-inc/playwright-flows/actions/runs/34121057397) · Donobu_
