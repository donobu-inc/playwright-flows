# 🐵 Donobu Test Report

## Summary

| Failed | Timed Out | Interrupted | Did Not Run | Auto-Healed | Flaky | Skipped | Passed |
| - | - | - | - | - | - | - | - |
| 0 ❌ | 0 ⏰ | 0 ⚡ | 0 🚫 | 1 ❤️‍🩹 | 0 🔁 | 0 ⏭️ | 8 ✅ |

_9 tests in 6m 34s_

### ❤️‍🩹 Auto-healed (1)

| Test | Diagnosis |
| --- | --- |
| [unstable-survey.test.ts › Fill out a survey](https://donobu.com/home/me/flows/1ba4dcde-a83d-4bbe-9d32-05e9e84f7f44) _(standalone)_ | **Stale Cached Instructions** — Cached page.ai instructions failed to find the 'Last Name' input field during deterministic replay because the survey form fields have changed. |

**[Open the full report →](https://github.com/donobu-inc/playwright-flows/actions/runs/34756562530)**

<details>
<summary>📋 Results by file (9 files)</summary>

| File | Result | Duration |
| --- | --- | --- |
| shopping/auth.setup.ts | 1 ✅ | 13s |
| checkly.test.ts | 1 ✅ | 28s |
| account-signup.test.ts | 1 ✅ | 55s |
| starbucks.test.ts | 1 ✅ | 9s |
| unstable-survey.test.ts | 1 ❤️‍🩹 | 2m 19s |
| wikipedia-assert.test.ts | 1 ✅ | 17s |
| ycombinator-search.test.ts | 1 ✅ | 10s |
| conversational-bot.test.ts | 1 ✅ | 1m 42s |
| shopping/cart-checkout.test.ts | 1 ✅ | 18s |

</details>

---

_Run started 2026-09-13T12:15:46.024Z · 5m 19s wall clock · auto-heal merged · [workflow run #745](https://github.com/donobu-inc/playwright-flows/actions/runs/34756562530) · Donobu_
