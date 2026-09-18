# 🐵 Donobu Test Report

## Summary

| Failed | Timed Out | Interrupted | Did Not Run | Auto-Healed | Flaky | Skipped | Passed |
| - | - | - | - | - | - | - | - |
| 0 ❌ | 0 ⏰ | 0 ⚡ | 0 🚫 | 1 ❤️‍🩹 | 0 🔁 | 0 ⏭️ | 8 ✅ |

_9 tests in 6m 18s_

### ❤️‍🩹 Auto-healed (1)

| Test | Diagnosis |
| --- | --- |
| [unstable-survey.test.ts › Fill out a survey](https://donobu.com/home/me/flows/c4162eba-6a83-4148-9801-4278af74072e) _(standalone)_ | **Stale Cached Instructions** — Replay of cached page.ai instructions failed on an input step because the dynamic survey form shifted layout/fields (looking for 'Last Name' instead of 'Your N… |

**[Open the full report →](https://github.com/donobu-inc/playwright-flows/actions/runs/35291243349)**

<details>
<summary>📋 Results by file (9 files)</summary>

| File | Result | Duration |
| --- | --- | --- |
| shopping/auth.setup.ts | 1 ✅ | 14s |
| checkly.test.ts | 1 ✅ | 28s |
| account-signup.test.ts | 1 ✅ | 1m 4s |
| starbucks.test.ts | 1 ✅ | 6s |
| unstable-survey.test.ts | 1 ❤️‍🩹 | 1m 43s |
| wikipedia-assert.test.ts | 1 ✅ | 17s |
| ycombinator-search.test.ts | 1 ✅ | 10s |
| conversational-bot.test.ts | 1 ✅ | 1m 37s |
| shopping/cart-checkout.test.ts | 1 ✅ | 35s |

</details>

---

_Run started 2026-09-18T00:28:02.133Z · 4m 57s wall clock · auto-heal merged · [workflow run #755](https://github.com/donobu-inc/playwright-flows/actions/runs/35291243349) · Donobu_
