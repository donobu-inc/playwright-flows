# 🐵 Donobu Test Report

## Summary

| Failed | Timed Out | Interrupted | Did Not Run | Auto-Healed | Flaky | Skipped | Passed |
| - | - | - | - | - | - | - | - |
| 0 ❌ | 1 ⏰ | 0 ⚡ | 0 🚫 | 2 ❤️‍🩹 | 0 🔁 | 0 ⏭️ | 6 ✅ |

_9 tests in 10m 2s_

### ⏰ Timed out (1)

| Test | Diagnosis |
| --- | --- |
| [conversational-bot.test.ts › Conversational bot compliance test - briefcase.chat](https://donobu.com/home/me/flows/b03af556-d4c6-47bb-b328-94aef8087468) _(Donobu-based Tests)_ | `Test timeout of 240000ms exceeded.` |

### ❤️‍🩹 Auto-healed (2)

| Test | Diagnosis |
| --- | --- |
| [checkly.test.ts › Checkly dev docs search](https://donobu.com/home/me/flows/5ce72a1a-6b26-4c7d-bd98-7c83d30b92a4) _(Donobu-based Tests)_ | **Stale Cached Instructions** — Cached page.ai deterministic selector selected the Solutions nav button instead of Developers, navigating to a solutions page instead of docs. |
| [unstable-survey.test.ts › Fill out a survey](https://donobu.com/home/me/flows/4f27de40-734b-4d2c-8f10-6a087dffc5e3) _(Donobu-based Tests)_ | **Stale Cached Instructions** — Cached deterministic replay failed to find the radio button element '[data-testid=\'radio-age-25-34\']' because the survey form structure changed on the live p… |

**[Open the full report →](https://github.com/donobu-inc/playwright-flows/actions/runs/32997761995)**

<details>
<summary>📋 Results by file (9 files)</summary>

| File | Result | Duration |
| --- | --- | --- |
| auth/sauce-login.test.ts | 1 ✅ | 14s |
| checkly.test.ts | 1 ❤️‍🩹 | 1m 48s |
| account-signup.test.ts | 1 ✅ | 1m 7s |
| starbucks.test.ts | 1 ✅ | 11s |
| unstable-survey.test.ts | 1 ❤️‍🩹 | 1m 36s |
| wikipedia-assert.test.ts | 1 ✅ | 26s |
| ycombinator-search.test.ts | 1 ✅ | 13s |
| conversational-bot.test.ts | 1 ⏰ | 4m 1s |
| shopping/cart-checkout.test.ts | 1 ✅ | 22s |

</details>

---

_Run started 2026-08-26T18:06:17.518Z · 7m 27s wall clock · auto-heal merged · [workflow run #709](https://github.com/donobu-inc/playwright-flows/actions/runs/32997761995) · Donobu_
