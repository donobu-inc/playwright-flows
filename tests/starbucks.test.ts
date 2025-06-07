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
    // Agreeing to cookie settings to proceed with site navigation.
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
    // Navigating to the store locator to find a store in Stowe, Vermont.
    await page.clickElement({
      selector: {
        element: [
          'span > a:nth-of-type(1)',
          "[href='\\/store-locator']",
          "a[href='\\/store-locator']",
          "//a[normalize-space(.)='Find a store']",
          'span > :nth-child(2)',
          'a',
        ],
        frame: null,
      },
    });
    // Searching for a store in Stowe, Vermont to confirm the address.
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
    // Ensuring the Stowe store address and location details match the criteria.
    await page.visuallyAssert({
      assertionToTestFor:
        "Assert that the address for the Stowe location is '109 Main Street' and Mt. Mansfield is visible on the map.",
    });
  },
);
