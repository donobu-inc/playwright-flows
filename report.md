# 🐵 Donobu Test Report

## Summary

| Failed | Timed Out | Interrupted | Did Not Run | Auto-Healed | Flaky | Skipped | Passed |
| - | - | - | - | - | - | - | - |
| 0 ❌ | 0 ⏰ | 0 ⚡ | 0 🚫 | 1 ❤️‍🩹 | 0 🔁 | 0 ⏭️ | 8 ✅ |

_9 tests in 5m 46s_

### ❤️‍🩹 Auto-healed (1)

| Test | Diagnosis |
| --- | --- |
| [unstable-survey.test.ts › Fill out a survey](https://donobu.com/home/me/flows/66327c2d-bf73-401f-9c34-26043d7caa56) _(standalone)_ | **Stale Cached Instructions** — Deterministic cache replay failed to find the cached 'Last Name' input field because the survey form fields have changed on the live page. |

**[Open the full report →](https://github.com/donobu-inc/playwright-flows/actions/runs/33506820447)**

<details>
<summary>📋 Results by file (9 files)</summary>

| File | Result | Duration |
| --- | --- | --- |
| shopping/auth.setup.ts | 1 ✅ | 14s |
| checkly.test.ts | 1 ✅ | 28s |
| account-signup.test.ts | 1 ✅ | 58s |
| starbucks.test.ts | 1 ✅ | 7s |
| unstable-survey.test.ts | 1 ❤️‍🩹 | 1m 26s |
| wikipedia-assert.test.ts | 1 ✅ | 19s |
| ycombinator-search.test.ts | 1 ✅ | 11s |
| conversational-bot.test.ts | 1 ✅ | 1m 41s |
| shopping/cart-checkout.test.ts | 1 ✅ | 18s |

</details>

---

_Run started 2026-09-01T12:17:53.464Z · 4m 26s wall clock · auto-heal merged · [workflow run #722](https://github.com/donobu-inc/playwright-flows/actions/runs/33506820447) · Donobu_
