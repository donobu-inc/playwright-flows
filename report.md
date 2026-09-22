# 🐵 Donobu Test Report

## Summary

| Failed | Timed Out | Interrupted | Did Not Run | Auto-Healed | Flaky | Skipped | Passed |
| - | - | - | - | - | - | - | - |
| 0 ❌ | 0 ⏰ | 0 ⚡ | 0 🚫 | 1 ❤️‍🩹 | 0 🔁 | 0 ⏭️ | 14 ✅ |

_15 tests in 6m 28s_

### ❤️‍🩹 Auto-healed (1)

| Test | Diagnosis |
| --- | --- |
| [unstable-survey.test.ts › Fill out a survey](https://donobu.com/home/demo-flows/flows/041ee8f9-48fb-4ca7-9ca5-a22553de3fcb) _(standalone)_ | **Stale Cached Instructions** — Cached page.ai step failed to find 'Last Name' input field because the survey form layout shifted to 'Your Name'. |

**[Open the full report →](https://github.com/donobu-inc/playwright-flows/actions/runs/35726182807)**

<details>
<summary>📋 Results by file (11 files)</summary>

| File | Result | Duration |
| --- | --- | --- |
| shopping/auth.setup.ts | 1 ✅ | 13s |
| checkly.test.ts | 1 ✅ | 28s |
| account-signup.test.ts | 1 ✅ | 46s |
| starbucks.test.ts | 1 ✅ | 7s |
| unstable-survey.test.ts | 1 ❤️‍🩹 | 1m 22s |
| virvly-contact.test.ts | 5 ✅ | 1m 8s |
| conversational-bot.test.ts | 1 ✅ | 1m 28s |
| wikipedia-search.test.ts | 1 ✅ | 9s |
| wikipedia-assert.test.ts | 1 ✅ | 15s |
| ycombinator-search.test.ts | 1 ✅ | 10s |
| shopping/cart-checkout.test.ts | 1 ✅ | 17s |

</details>

---

_Run started 2026-09-22T12:17:12.812Z · 4m 27s wall clock · auto-heal merged · [workflow run #770](https://github.com/donobu-inc/playwright-flows/actions/runs/35726182807) · Donobu_
