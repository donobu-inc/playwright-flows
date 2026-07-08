import { defineConfig, devices } from '@donobu/test';

export default defineConfig({
  testDir: './tests',
  projects: [
    {
      name: 'sauce-auth',
      use: {
        ...devices['Desktop Chrome'],
      },
      testMatch: 'tests/auth/sauce-login.test.ts',
    },
    {
      name: 'sauce-shopping',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'sauce-auth.json',
      },
      testMatch: 'tests/shopping/**/*.test.ts',
      dependencies: ['sauce-auth'],
    },
    {
      name: 'Donobu-based Tests',
      testMatch: 'tests/**/*.test.ts',
      testIgnore: ['tests/auth/**', 'tests/shopping/**'],
    },
  ],
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [
    ['@donobu/test/reporter/html'],
    ['@donobu/test/reporter/markdown'],
    ['@donobu/test/reporter/slack'],
  ],
  timeout: 240000
});
