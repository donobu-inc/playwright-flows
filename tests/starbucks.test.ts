/**
 * Be sure that Donobu is installed before running this script...
 *    'npm install donobu' or 'yarn add donobu'
 *
 * Also, be sure that Playwright's browsers are installed...
 *    'npx playwright install'
 *
 * Also, since this test is using tools that require the usage of an LLM, be
 * sure to have an appropriate LLM API key available as an environment variable
 * (e.g. OPENAI_API_KEY, ANTHROPIC_API_KEY, etc).
 */
import { test } from 'donobu';
import { gptClientFixture } from 'donobu';

const testTitle = 'Test for https://www.starbucks.com/menu';
const testDetails = {
  annotation: {
    type: 'objective',
    description: `Assert that the featured menu page has fun, Spring season vibes.
  
  Then find a store in the town of Stowe, Vermont. Ensure that the address is "109 Main Street".
  Also ensure that the map shows Mt. Mansfield close by.`,
  },
};
test.extend({ gptClient: gptClientFixture() })(
  testTitle,
  testDetails,
  async ({ page }) => {
    // Initializing web navigation.
    await page.goto('https://www.starbucks.com/menu');
    // Accepting cookies to continue navigation on the Starbucks website.
    await page.clickElement({
      selector: {
        element: [
          '#truste-consent-button',
          '.truste-button2',
          "//button[normalize-space(.)='Agree']",
          'div > button:nth-of-type(2)',
          'button.truste-button2',
          'button',
          'div > :nth-child(2)',
        ],
        frame: null,
      },
    });
    // Exploring the featured menu for Spring season vibes.
    await page.clickElement({
      selector: {
        element: [
          "[href='https\\:\\/\\/www\\.starbucks\\.com\\/menu\\/featured']",
          "a[href='https\\:\\/\\/www\\.starbucks\\.com\\/menu\\/featured']",
          "//a[normalize-space(.)='Featured']",
          'li > a:nth-of-type(1)',
          'li > :nth-child(1)',
          'a',
        ],
        frame: null,
      },
    });
    // Checking for expressions of Spring season vibes in the menu.
    await page.visuallyAssert({
      assertionToTestFor:
        'Assert that the featured menu page has Spring season vibes.',
    });
    // Finding a store in Stowe, Vermont to continue pursuing the objective.
    await page.clickElement({
      selector: {
        element: [
          'span > :nth-child(2)',
          'span > a:nth-of-type(1)',
          "[href='https\\:\\/\\/www\\.starbucks\\.com\\/store-locator']",
          "a[href='https\\:\\/\\/www\\.starbucks\\.com\\/store-locator']",
          "//a[normalize-space(.)='Find a store']",
          'a',
        ],
        frame: null,
      },
    });
    // Searching for Stowe, Vermont to locate the proper store.
    await page.inputText({
      text: 'Stowe, Vermont',
      finalizeWithSubmit: true,
      selector: {
        element: [
          "[data-e2e='searchTermInput']",
          "input[data-e2e='searchTermInput']",
          'form > :nth-child(1)',
          'form > input:nth-of-type(1)',
          "[placeholder='Find\\ a\\ store']",
          "[aria-label='Enter\\ a\\ location\\ to\\ search\\ for\\ Starbucks\\ stores']",
          'input',
        ],
        frame: null,
      },
    });
    // Ensuring the correct store location and map details are present.
    await page.visuallyAssert({
      assertionToTestFor:
        'Assert that the store located at 109 Main Street in Stowe, Vermont is shown and that Mt. Mansfield is nearby on the map.',
    });
  },
);
