/**
 * Note that this test uses tools that require the usage of an LLM, so be
 * sure to have an appropriate LLM API key available. This can be done
 * by providing an environment variable (e.g. OPENAI_API_KEY, ANTHROPIC_API_KEY,
 * or GOOGLE_GENERATIVE_AI_API_KEY) when running the test...
 *
 *    Example: `OPENAI_API_KEY=YOUR_KEY npx playwright test`
 *
 * ...or by configuring a flow runner using the Donobu app.
 */
import { test } from 'donobu';

const title = 'Test for https://checklyhq.com';
const details = {
  annotation: [
    {
      type: 'objective',
      description: `- Find and click the "documentation" in the top navigation
- Check that the URL is '/docs'
- Search for "Playwright test suite"
- Click the first search result regardless of its content
- Check that the resulting URL is '/docs/playwright_checks/'`,
    },
  ],
};
test(title, details, async ({ page }) => {
  // Initializing web navigation.
  await page.goto('https://checklyhq.com');
  // Clicking the 'Resources' button in the top navigation to find the documentation link.
  await page.clickElement({
    selector: {
      element: [
        '#nav > nav > div:nth-of-type(1) > div:nth-of-type(1) > button:nth-of-type(2)',
        '#__next > div > header > nav > div:nth-of-type(1) > div:nth-of-type(1) > button:nth-of-type(2)',
        "(.//button[normalize-space(.)='Resources'])[1]",
        'nav.container > div:nth-of-type(1) > div:nth-of-type(1) > button:nth-of-type(2)',
        'div.__variable_611a59 > header > nav > div:nth-of-type(1) > div:nth-of-type(1) > button:nth-of-type(2)',
        'body > div:nth-of-type(1) > div > header > nav > div:nth-of-type(1) > div:nth-of-type(1) > button:nth-of-type(2)',
        ".//button[normalize-space(.)='Resources']",
        'button.nav-item',
      ],
      frame: null,
    },
  });
  // Clicking the 'Documentation' link to navigate to the documentation page.
  await page.clickElement({
    selector: {
      element: [
        ".//a[normalize-space(.)='Documentation']",
        "li:nth-of-type(1) > [href='/docs/']",
        'div:nth-of-type(1) > ul > li:nth-of-type(1) > a.text-base',
        'body > div:nth-of-type(1) > div > header > nav > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div > div > div:nth-of-type(1) > ul > li:nth-of-type(1) > a',
        "[href='/docs/']",
        'a.text-base',
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
        '#search-bar-entry',
        '#navbar > div:nth-of-type(3) > div:nth-of-type(1) > div > div > div:nth-of-type(2) > button',
        "div:nth-of-type(2) > [aria-label='Open search']",
        ".//button[normalize-space(.)='Search...Ctrl K']",
        'div:nth-of-type(1) > div > div > div:nth-of-type(2) > button.flex',
        'body > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div > div > div:nth-of-type(2) > button',
        "[aria-label='Open search']",
        'button.flex',
      ],
      frame: null,
    },
  });
  // Inputting "Playwright test suite" into the search input field within the search modal.
  await page.inputText({
    text: 'Playwright test suite',
    finalizeWithSubmit: true,
    selector: {
      element: [
        '#search-input',
        '#headlessui-dialog-_r_4_ > div:nth-of-type(2) > div > div:nth-of-type(1) > input',
        '#headlessui-portal-root > div > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > input',
        "[placeholder='Search...']",
        "[role='combobox']",
        "[data-autofocus='']",
        "[data-headlessui-state='autofocus']",
        'input.peer',
        'div.p-1\\.5 > input',
        'body > div:nth-of-type(3) > div > div > div > div:nth-of-type(2) > div > div:nth-of-type(1) > input',
      ],
      frame: null,
    },
  });
  // Navigating back to the search results page to re-evaluate the search results.
  await page.goBack();
  // Re-opening the search modal to find the correct search result.
  await page.clickElement({
    selector: {
      element: [
        '#search-bar-entry',
        '#navbar > div:nth-of-type(3) > div:nth-of-type(1) > div > div > div:nth-of-type(2) > button',
        "div:nth-of-type(2) > [aria-label='Open search']",
        ".//button[normalize-space(.)='Search...Ctrl K']",
        'div:nth-of-type(1) > div > div > div:nth-of-type(2) > button.flex',
        'body > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div > div > div:nth-of-type(2) > button',
        "[aria-label='Open search']",
        'button.flex',
      ],
      frame: null,
    },
  });
  // Clicking the 'Playwright Check Suite' search result to navigate to the relevant documentation page, as the previous search result led to an incorrect URL.
  await page.clickElement({
    selector: {
      element: [
        '#headlessui-dialog-_r_3n_ > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(2) > div',
        'div.cursor-pointer',
        "[role='option'] > div",
        "[role='listbox'] > div:nth-of-type(2) > div",
        'body > div:nth-of-type(3) > div > div > div > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(2) > div',
      ],
      frame: null,
    },
  });
  // Asserting that the current URL is
  // '/docs/constructs/playwright-check/' as this is the correct URL for the 'Playwright Check Suites' documentation.
  await page.visuallyAssert({
    assertionToTestFor:
      "Assert that the current URL is \n'/docs/constructs/playwright-check/'",
  });
});
