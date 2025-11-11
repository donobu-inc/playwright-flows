import { test } from 'donobu';

test('Hackernews search', async ({ page }) => {
  await page.goto('https://news.ycombinator.com');
  await page.ai(
    'Scroll to the bottom of the page and do a search for "mac app for web testing"'
  );
  await page.ai.assert('Donobu appears among the top search results');
});
