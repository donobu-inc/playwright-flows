# 🐵 Donobu Test Report

## Summary

| Failed | Timed Out | Interrupted | Did Not Run | Auto-Healed | Flaky | Skipped | Passed |
| - | - | - | - | - | - | - | - |
| 0 ❌ | 0 ⏰ | 0 ⚡ | 0 🚫 | 1 ❤️‍🩹 | 0 🔁 | 0 ⏭️ | 14 ✅ |

_15 tests in 7m 19s_

### ❤️‍🩹 Auto-healed (1)

| Test | Diagnosis |
| --- | --- |
| [unstable-survey.test.ts › Fill out a survey](https://donobu.com/home/demo-flows/flows/78697af7-1269-4057-a073-28529f9ae568) _(standalone)_ | **Stale Cached Instructions** — Cached page.ai instruction failed to resolve the 'Last Name' input field because the survey form layout shifted to 'Your Name'. |

**[Open the full report →](https://github.com/donobu-inc/playwright-flows/actions/runs/35510077470)**

<details>
<summary>📋 Results by file (11 files)</summary>

| File | Result | Duration |
| --- | --- | --- |
| shopping/auth.setup.ts | 1 ✅ | 14s |
| checkly.test.ts | 1 ✅ | 29s |
| account-signup.test.ts | 1 ✅ | 51s |
| starbucks.test.ts | 1 ✅ | 7s |
| unstable-survey.test.ts | 1 ❤️‍🩹 | 1m 59s |
| virvly-contact.test.ts | 5 ✅ | 1m 13s |
| conversational-bot.test.ts | 1 ✅ | 1m 27s |
| wikipedia-assert.test.ts | 1 ✅ | 16s |
| wikipedia-search.test.ts | 1 ✅ | 9s |
| ycombinator-search.test.ts | 1 ✅ | 10s |
| shopping/cart-checkout.test.ts | 1 ✅ | 19s |

</details>

---

_Run started 2026-09-20T12:15:54.678Z · 5m 14s wall clock · auto-heal merged · [workflow run #766](https://github.com/donobu-inc/playwright-flows/actions/runs/35510077470) · Donobu_
