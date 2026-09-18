import { expect, test } from '@donobu/test';

/**
 * A reader can search Wikipedia for the Playwright testing framework, open
 * its article, and see the language it is written in inside the infobox.
 */
test(
  'Search opens an article with its infobox',
  { tag: ['@wikipedia-search-article-infobox'] },
  async ({ page }) => {
    await page.goto('https://en.wikipedia.org');
    await page.ai(
      'Search for "Playwright (software)" and open the article about the Playwright testing framework',
    );
    await expect(page).toHaveURL(
      'https://en.wikipedia.org/wiki/Playwright_(software)',
    );
    await page.ai.assert('The article heading names Playwright');
    // Scope the judgment to the infobox so body text cannot satisfy it.
    await page.ai
      .within('the infobox at the top right of the article')
      .assert('The "Written in" row lists TypeScript');
  },
);
