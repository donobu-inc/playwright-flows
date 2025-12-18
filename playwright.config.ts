import { defineConfig, devices } from 'donobu';

export default defineConfig({
  testDir: './tests',
  projects: [
    {
      name: 'Donobu Tests',
      testMatch: '**/*.test.ts',
      use: { ...devices['Desktop Chromium'] },
      testIgnore: ['**/advanced/responsive.test.ts'],
      timeout: 240000,

    },
    {
      name: 'Responsive Tests',
      testMatch: '**/advanced/responsive.test.ts',
      use: { ...devices['iPhone 14'] },
      timeout: 240000,
    }
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
