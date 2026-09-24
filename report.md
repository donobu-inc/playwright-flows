# 🐵 Donobu Test Report

## Summary

| Failed | Timed Out | Interrupted | Did Not Run | Auto-Healed | Flaky | Skipped | Passed |
| - | - | - | - | - | - | - | - |
| 0 ❌ | 0 ⏰ | 0 ⚡ | 0 🚫 | 1 ❤️‍🩹 | 0 🔁 | 2 ⏭️ | 14 ✅ |

_17 tests in 6m 56s_

### ❤️‍🩹 Auto-healed (1)

| Test | Diagnosis |
| --- | --- |
| [unstable-survey.test.ts › Fill out a survey](https://donobu.com/home/demo-flows/flows/3b1a6393-55c2-456d-be5e-e0639a1cfd45) _(standalone)_ | **Stale Cached Instructions** — Deterministic replay failed when attempting to locate the cached 'Last Name' input field on an unstable survey form variant. |

**[Open the full report →](https://github.com/donobu-inc/playwright-flows/actions/runs/35998080796)**

<details>
<summary>📋 Results by file (12 files)</summary>

| File | Result | Duration |
| --- | --- | --- |
| shopping/auth.setup.ts | 1 ✅ | 15s |
| checkly.test.ts | 1 ✅ | 29s |
| account-signup.test.ts | 1 ✅ | 52s |
| starbucks.test.ts | 1 ✅ | 7s |
| subway-localization.test.ts | 2 ⏭️ | 7s |
| unstable-survey.test.ts | 1 ❤️‍🩹 | 1m 20s |
| virvly-contact.test.ts | 5 ✅ | 1m 13s |
| conversational-bot.test.ts | 1 ✅ | 1m 34s |
| wikipedia-assert.test.ts | 1 ✅ | 16s |
| wikipedia-search.test.ts | 1 ✅ | 9s |
| ycombinator-search.test.ts | 1 ✅ | 10s |
| shopping/cart-checkout.test.ts | 1 ✅ | 19s |

</details>

---

_Run started 2026-09-24T12:18:33.362Z · 4m 43s wall clock · auto-heal merged · [workflow run #775](https://github.com/donobu-inc/playwright-flows/actions/runs/35998080796) · Donobu_
