# 🐵 Donobu Test Report

## Summary

| Failed | Timed Out | Interrupted | Did Not Run | Auto-Healed | Flaky | Skipped | Passed |
| - | - | - | - | - | - | - | - |
| 0 ❌ | 0 ⏰ | 0 ⚡ | 0 🚫 | 1 ❤️‍🩹 | 0 🔁 | 2 ⏭️ | 14 ✅ |

_17 tests in 6m 48s_

### ❤️‍🩹 Auto-healed (1)

| Test | Diagnosis |
| --- | --- |
| [unstable-survey.test.ts › Fill out a survey](https://donobu.com/home/demo-flows/flows/f4505807-9029-465c-af99-50268befea37) _(standalone)_ | **Stale Cached Instructions** — Cached page.ai step failed to locate the 'Last Name' input field because the dynamic survey rendered a different form variant ('Your Name' / 'Contact Email'). |

**[Open the full report →](https://github.com/donobu-inc/playwright-flows/actions/runs/35859497819)**

<details>
<summary>📋 Results by file (12 files)</summary>

| File | Result | Duration |
| --- | --- | --- |
| shopping/auth.setup.ts | 1 ✅ | 15s |
| checkly.test.ts | 1 ✅ | 26s |
| account-signup.test.ts | 1 ✅ | 52s |
| starbucks.test.ts | 1 ✅ | 6s |
| subway-localization.test.ts | 2 ⏭️ | 6s |
| unstable-survey.test.ts | 1 ❤️‍🩹 | 1m 10s |
| virvly-contact.test.ts | 5 ✅ | 1m 12s |
| conversational-bot.test.ts | 1 ✅ | 1m 41s |
| wikipedia-assert.test.ts | 1 ✅ | 16s |
| wikipedia-search.test.ts | 1 ✅ | 9s |
| ycombinator-search.test.ts | 1 ✅ | 10s |
| shopping/cart-checkout.test.ts | 1 ✅ | 19s |

</details>

---

_Run started 2026-09-23T12:17:49.250Z · 4m 37s wall clock · auto-heal merged · [workflow run #773](https://github.com/donobu-inc/playwright-flows/actions/runs/35859497819) · Donobu_
