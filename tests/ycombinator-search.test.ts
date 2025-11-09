import { test } from 'donobu';

test('Hackernews search', async ({ page }) => {
  await page.goto('https://news.ycombinator.com');
  await page.ai.act(
    'Scroll to the bottom of the page and do a search for "mac app for web testing"'
  );
  await page.ai.assertPage('Donobu appears among the top search results');
});
