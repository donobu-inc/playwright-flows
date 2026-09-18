import { expect, test } from '@donobu/test';

/**
 * A developer can reach the Checkly documentation from the marketing site and
 * use the docs search to land on the Playwright check construct page.
 */
test(
  'Checkly dev docs search',
  { tag: ['@checkly-docs-search'] },
  async ({ page }) => {
    await page.goto('https://checklyhq.com');
    await page.ai(
      `Click on the Developers dropdown menu, then click into to the Documentation option`,
    );
    await expect(page).toHaveURL('https://www.checklyhq.com/docs/');
    await page.ai(
      `Do a search for "Playwright check suite", and chose the match for "Constructs > DETECT" from the search suggestions dropdown.
    NOTE: Since this website uses typeahead for search, do not submit the search via "Enter".`,
    );
    await expect(page).toHaveURL(
      'https://www.checklyhq.com/docs/constructs/playwright-check/',
    );
  },
);
