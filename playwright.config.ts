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
