import { test } from '@donobu/test';

/**
 * A Hacker News reader can search for "mac app for web testing" from the
 * footer search box and see Donobu among the top results.
 */
test(
  'Hackernews search',
  { tag: ['@hackernews-search-donobu'] },
  async ({ page }) => {
    await page.goto('https://news.ycombinator.com');
    await page.ai(
      'Scroll to the bottom of the page, locate search input field, do a search with keyword "mac app for web testing"',
    );
    // Algolia renders results asynchronously; retry so the list can settle.
    await page.ai.assert('Donobu appears among the top search results', {
      retries: 3,
      retryDelaySeconds: 2,
    });
  },
);
