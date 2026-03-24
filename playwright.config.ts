import { defineConfig } from 'donobu';

export default defineConfig({
  testDir: './tests',
  projects: [
    {
      name: 'Donobu-based Tests',
      testMatch: 'tests/**/*.test.ts',
    },
  ],
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [
    ['github'],
    ['json', { outputFile: 'test-results/playwright-report.json' }],
    ['donobu/reporter/html'],
  ],
  timeout: 240000
});
