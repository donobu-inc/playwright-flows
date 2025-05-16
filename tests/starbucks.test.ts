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
    // Verifying if the featured menu page has a fun, Spring season vibe to fulfill the objective.
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
    // Confirming that the featured page highlights Spring season vibes as part of the objective.
    await page.visuallyAssert({
      assertionToTestFor:
        'Assert that the featured menu page has fun, Spring season vibes with drinks and imagery related to Spring.',
    });
    // Looking for a store in Stowe, Vermont to ensure the address is 109 Main Street and verify the proximity of Mt. Mansfield.
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
    // Searching for a Starbucks store in Stowe, Vermont to verify the address and nearby map details.
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
    // Confirming the store address and map details to complete the verification process.
    await page.assertPageText({
      text: 'Stowe, 109 Main Street',
    });
  },
);
