# 🐵 Donobu Test Report

## Summary

| Failed | Timed Out | Interrupted | Did Not Run | Auto-Healed | Flaky | Skipped | Passed |
| - | - | - | - | - | - | - | - |
| 0 ❌ | 0 ⏰ | 0 ⚡ | 0 🚫 | 1 ❤️‍🩹 | 0 🔁 | 0 ⏭️ | 14 ✅ |

_15 tests in 7m 30s_

### ❤️‍🩹 Auto-healed (1)

| Test | Diagnosis |
| --- | --- |
| [unstable-survey.test.ts › Fill out a survey](https://donobu.com/home/demo-flows/flows/63383e74-80ed-4e16-8a6e-146c9622fa89) _(standalone)_ | **Stale Cached Instructions** — Cached step failed to locate 'Last Name' input because the survey page rendered a different set of fields ('Your Name', 'Contact Email', etc.). |

**[Open the full report →](https://github.com/donobu-inc/playwright-flows/actions/runs/35442318386)**

<details>
<summary>📋 Results by file (11 files)</summary>

| File | Result | Duration |
| --- | --- | --- |
| shopping/auth.setup.ts | 1 ✅ | 15s |
| checkly.test.ts | 1 ✅ | 28s |
| account-signup.test.ts | 1 ✅ | 51s |
| starbucks.test.ts | 1 ✅ | 8s |
| unstable-survey.test.ts | 1 ❤️‍🩹 | 1m 48s |
| virvly-contact.test.ts | 5 ✅ | 1m 12s |
| conversational-bot.test.ts | 1 ✅ | 1m 50s |
| wikipedia-search.test.ts | 1 ✅ | 9s |
| wikipedia-assert.test.ts | 1 ✅ | 16s |
| ycombinator-search.test.ts | 1 ✅ | 10s |
| shopping/cart-checkout.test.ts | 1 ✅ | 18s |

</details>

---

_Run started 2026-09-19T12:15:52.237Z · 5m 16s wall clock · auto-heal merged · [workflow run #764](https://github.com/donobu-inc/playwright-flows/actions/runs/35442318386) · Donobu_
