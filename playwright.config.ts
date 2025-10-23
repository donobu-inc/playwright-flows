import { defineConfig, devices } from 'donobu';

export default defineConfig({
  testDir: './tests',
  projects: [
    {
      name: 'Donobu Tests',
      testMatch: 'tests/*.test.ts',
      use: { ...devices['Desktop Chromium'] },
      timeout: 240000,
    },
  ],
  // If you set the SELF_HEAL_TESTS_ENABLED environment variable to 'true',
  // and you allow retries for the test, the calls to 'page.ai' inside of the
  // tests will not use instruction caches if they are present so that the AI
  // can see the test with fresh eyes so the failure can be fixed.
  retries: 1,
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [
    ['github'],
    ['json', { outputFile: 'test-results/playwright-report.json' }],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
});
