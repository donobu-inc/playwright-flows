import { test } from 'donobu';

const title = 'Test for https://checklyhq.com';
const details = {
  annotation: {
    type: 'objective',
    description: `- Find and click the "documentation" in the top navigation
- Check that the URL is '/docs'
- Search for "Playwright test suite"
- Click the first search result regardless of its content
- Check that the resulting URL is '/docs/playwright_checks/'`,
  },
};
test(title, details, async ({ page }) => {
  // Initializing web navigation.
  await page.goto('https://checklyhq.com');
  // Clicking the 'Resources' button in the top navigation to find the documentation link.
  await page.clickElement({
    selector: {
      element: [
        'html > body > div:nth-of-type(1) > div > header > nav > div:nth-of-type(1) > div:nth-of-type(1) > button:nth-of-type(2)',
        "//button[normalize-space(.)='Resources']",
        'button.nav-item',
        'div > button:nth-of-type(2)',
        '.nav-item',
        'button',
        'div > :nth-child(3)',
      ],
      frame: null,
    },
  });
  // Clicking the 'Documentation' link to navigate to the documentation page.
  await page.clickElement({
    selector: {
      element: [
        "//a[normalize-space(.)='Documentation']",
        'html > body > div:nth-of-type(1) > div > header > nav > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div > div > div:nth-of-type(1) > ul > li:nth-of-type(1) > a',
        "[href='\\/docs\\/']",
        "a[href='\\/docs\\/']",
        'li > a:nth-of-type(1)',
        'li > :nth-child(1)',
        'a',
      ],
      frame: null,
    },
  });
  // Searching for "Playwright test suite" in the documentation search bar to find relevant documentation.
  await page.inputText({
    text: 'Playwright test suite',
    finalizeWithSubmit: true,
    selector: {
      element: [
        "[aria-label='Search\\ \\(Command\\+K\\)']",
        "//button[normalize-space(.)='Search⌘K']",
        'html > body > nav > div > div:nth-of-type(2) > div > button',
        'div > button:nth-of-type(1)',
        'button',
        'div > :nth-child(1)',
      ],
      frame: null,
    },
  });
  // Clicking the first search result for "Playwright test suite" to navigate to the relevant documentation page.
  await page.clickElement({
    selector: {
      element: [
        'html > body > div:nth-of-type(8) > div > div > div > section:nth-of-type(1) > ul > li',
        '#docsearch-hits0-item-0',
        "//li[normalize-space(.)='Managing Users and Plans with Vercel']",
        '.DocSearch-Hit',
        'li.DocSearch-Hit',
        'ul > :nth-child(1)',
        'ul > li:nth-of-type(1)',
        'li',
      ],
      frame: null,
    },
  });
});
