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
    // Accepting cookies to enable proper website functionality.
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
    // Looking for spring-themed products or a special menu.
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
    // Confirming that the featured menu page has fun, Spring season vibes.
    await page.visuallyAssert({
      assertionToTestFor:
        'Assert that the featured menu page has fun, Spring season vibes.',
    });
    // Finding a store in Stowe, Vermont to verify its address and proximity to Mt. Mansfield.
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
    // Locating the Starbucks store in Stowe, Vermont to verify address and map proximity.
    await page.inputText({
      text: 'Stowe, Vermont',
      finalizeWithSubmit: false,
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
    // Ensuring that we are searching for stores in the correct location in Stowe, Vermont.
    await page.clickElement({
      selector: {
        element: [
          '.button___s0b6x',
          "[data-e2e='submitSearchTermButton']",
          "button[data-e2e='submitSearchTermButton']",
          "[aria-label='Submit\\ search\\ term']",
          'button.button___s0b6x',
          'div > button:nth-of-type(1)',
          'button',
          'div > :nth-child(1)',
        ],
        frame: null,
      },
    });
    // Confirming the store address in Stowe, Vermont.
    await page.assertPageText({
      text: 'Stowe, 109 Main Street',
    });
  },
);
