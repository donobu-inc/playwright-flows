# 🐵 Donobu Test Report

## Summary

| Failed | Timed Out | Interrupted | Did Not Run | Auto-Healed | Flaky | Skipped | Passed |
| - | - | - | - | - | - | - | - |
| 0 ❌ | 0 ⏰ | 0 ⚡ | 0 🚫 | 1 ❤️‍🩹 | 0 🔁 | 0 ⏭️ | 9 ✅ |

_10 tests in 7m 38s_

### ❤️‍🩹 Auto-healed (1)

| Test | Diagnosis |
| --- | --- |
| [unstable-survey.test.ts › Fill out a survey](https://donobu.com/home/demo-flows/flows/c43c6a9d-2fda-428f-9fe0-0a4829136672) _(standalone)_ | **Stale Cached Instructions** — Cached deterministic replay failed to find the 'Last Name' input field because the survey form rendered a different field layout ('Your Name', 'Contact Email'). |

**[Open the full report →](https://github.com/donobu-inc/playwright-flows/actions/runs/35295188320)**

<details>
<summary>📋 Results by file (10 files)</summary>

| File | Result | Duration |
| --- | --- | --- |
| shopping/auth.setup.ts | 1 ✅ | 15s |
| checkly.test.ts | 1 ✅ | 30s |
| account-signup.test.ts | 1 ✅ | 59s |
| starbucks.test.ts | 1 ✅ | 8s |
| unstable-survey.test.ts | 1 ❤️‍🩹 | 2m 26s |
| wikipedia-assert.test.ts | 1 ✅ | 18s |
| wikipedia-search.test.ts | 1 ✅ | 9s |
| ycombinator-search.test.ts | 1 ✅ | 11s |
| conversational-bot.test.ts | 1 ✅ | 2m 17s |
| shopping/cart-checkout.test.ts | 1 ✅ | 20s |

</details>

---

_Run started 2026-09-18T01:25:33.625Z · 6m 5s wall clock · auto-heal merged · [workflow run #758](https://github.com/donobu-inc/playwright-flows/actions/runs/35295188320) · Donobu_
