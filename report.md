# 🐵 Donobu Test Report

## Summary

| Failed | Timed Out | Interrupted | Did Not Run | Auto-Healed | Flaky | Skipped | Passed |
| - | - | - | - | - | - | - | - |
| 0 ❌ | 0 ⏰ | 0 ⚡ | 0 🚫 | 1 ❤️‍🩹 | 0 🔁 | 0 ⏭️ | 8 ✅ |

_9 tests in 7m 19s_

### ❤️‍🩹 Auto-healed (1)

| Test | Diagnosis |
| --- | --- |
| [unstable-survey.test.ts › Fill out a survey](https://donobu.com/home/me/flows/aa986fce-ac1a-400a-8afc-5a46c3b3107b) _(standalone)_ | **Stale Cached Instructions** — Deterministic cache replay failed to find the 'input-lastname' field because the survey form now displays 'Your Name' instead. |

**[Open the full report →](https://github.com/donobu-inc/playwright-flows/actions/runs/33252006547)**

<details>
<summary>📋 Results by file (9 files)</summary>

| File | Result | Duration |
| --- | --- | --- |
| shopping/auth.setup.ts | 1 ✅ | 15s |
| checkly.test.ts | 1 ✅ | 30s |
| account-signup.test.ts | 1 ✅ | 1m 3s |
| starbucks.test.ts | 1 ✅ | 8s |
| unstable-survey.test.ts | 1 ❤️‍🩹 | 2m 42s |
| wikipedia-assert.test.ts | 1 ✅ | 21s |
| ycombinator-search.test.ts | 1 ✅ | 11s |
| conversational-bot.test.ts | 1 ✅ | 1m 45s |
| shopping/cart-checkout.test.ts | 1 ✅ | 19s |

</details>

---

_Run started 2026-08-29T12:15:34.977Z · 5m 50s wall clock · auto-heal merged · [workflow run #717](https://github.com/donobu-inc/playwright-flows/actions/runs/33252006547) · Donobu_
