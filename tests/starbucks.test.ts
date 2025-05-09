/**
 * Be sure that Donobu is installed before running this script...
 *    'npm install donobu' or 'yarn add donobu'
 *
 * Also, be sure that Playwright's browsers are installed...
 *    'npx playwright install'
 *
 * Also, since this test is using tools that require the usage of an LLM, be
 * sure to have an appropriate LLM API key available as an environment variable
 * (e.g. OPENAI_API_KEY, ANTHROPIC_API_KEY, or GOOGLE_GENERATIVE_AI_API_KEY).
 */
import { test } from 'donobu';

const testTitle = 'Test for https://www.starbucks.com/menu';
const testDetails = {
  annotation: {
    type: 'objective',
    description: `Assert that the featured menu page has fun, Spring season vibes.
  
  Then find a store in the town of Stowe, Vermont. Ensure that the address is "109 Main Street".
  Also ensure that the map shows Mt. Mansfield close by.`,
  },
};
test(testTitle, testDetails, async ({ page }) => {
  // Initializing web navigation.
  await page.goto('https://www.starbucks.com/menu');
  // Clicking the 'Agree' button to dismiss the cookie notice, allowing access to the page content.
  await page.clickElement({
    selector: {
      element: [
        "//button[normalize-space(.)='Agree']",
        'div > button:nth-of-type(2)',
        'html > body > div:nth-of-type(1) > div > div > div:nth-of-type(3) > button:nth-of-type(2)',
        '#truste-consent-button',
        '.truste-button2',
        'button.truste-button2',
        'button',
        'div > :nth-child(2)',
      ],
      frame: null,
    },
  });
  // Clicking on the 'Featured' menu item to see the featured items and determine if they have a Spring theme.
  await page.clickElement({
    selector: {
      element: [
        "//a[normalize-space(.)='Featured']",
        'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > main > div:nth-of-type(1) > nav > ul > li:nth-of-type(2) > a',
        "[href='https\\:\\/\\/www\\.starbucks\\.com\\/menu\\/featured']",
        "a[href='https\\:\\/\\/www\\.starbucks\\.com\\/menu\\/featured']",
        'li > a:nth-of-type(1)',
        'li > :nth-child(1)',
        'a',
      ],
      frame: null,
    },
  });
  // Verifying that the featured menu page has a Spring theme as required by the objective. The page title is 'The Spring edit' and the drinks are light and refreshing, so it has Spring vibes.
  await page.visuallyAssert({
    assertionToTestFor: 'The featured menu page has fun, Spring season vibes.',
  });
  // Clicking on the 'Find a store' link to locate a store in Stowe, Vermont.
  await page.clickElement({
    selector: {
      element: [
        'span > :nth-child(2)',
        'span > a:nth-of-type(1)',
        'html > body > div:nth-of-type(3) > header > nav > div:nth-of-type(1) > div > div:nth-of-type(2) > div:nth-of-type(2) > div > span > a',
        "//a[normalize-space(.)='Find a store']",
        "[href='https\\:\\/\\/www\\.starbucks\\.com\\/store-locator']",
        "a[href='https\\:\\/\\/www\\.starbucks\\.com\\/store-locator']",
        'a',
      ],
      frame: null,
    },
  });
  // Inputting the location Stowe, Vermont to find a store in that town.
  await page.inputText({
    text: 'Stowe, Vermont',
    finalizeWithSubmit: false,
    selector: {
      element: [
        "[aria-label='Enter\\ a\\ location\\ to\\ search\\ for\\ Starbucks\\ stores']",
        "[placeholder='Find\\ a\\ store']",
        'form > :nth-child(1)',
        'form > input:nth-of-type(1)',
        'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > main > div > div:nth-of-type(2) > div > div > form > input',
        "[data-e2e='searchTermInput']",
        "input[data-e2e='searchTermInput']",
        'input',
      ],
      frame: null,
    },
  });
  // Submitting the search term to find stores in Stowe, Vermont.
  await page.clickElement({
    selector: {
      element: [
        "[aria-label='Submit\\ search\\ term']",
        'html > body > div:nth-of-type(2) > div > div:nth-of-type(3) > main > div > div:nth-of-type(2) > div > div > form > div > button',
        '.button___s0b6x',
        "[data-e2e='submitSearchTermButton']",
        "button[data-e2e='submitSearchTermButton']",
        'button.button___s0b6x',
        'div > button:nth-of-type(1)',
        'button',
        'div > :nth-child(1)',
      ],
      frame: null,
    },
  });
  // Asserting that the address of the store is 109 Main Street.
  await page.assertPageText({
    text: '109 Main Street',
  });
});
