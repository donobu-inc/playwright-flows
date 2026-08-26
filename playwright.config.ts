import { defineConfig, devices } from '@donobu/test';

export default defineConfig({
  testDir: './tests',
  projects: [
    // Chained suite: authenticate once, then run the shopping journey with
    // the saved session. A future chained app gets its own domain-named
    // directory and an equivalent pair of project blocks.
    {
      name: 'shopping-setup',
      testMatch: 'tests/shopping/*.setup.ts',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'shopping',
      testMatch: 'tests/shopping/**/*.test.ts',
      dependencies: ['shopping-setup'],
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/shopping.json',
      },
    },
    // Standalone flows live flat at the tests root; the top-level glob does
    // not descend, so no ignore list is needed.
    {
      name: 'standalone',
      testMatch: 'tests/*.test.ts',
      use: {
        ...devices['Desktop Chrome'],
      },
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
  timeout: 240000,
});
