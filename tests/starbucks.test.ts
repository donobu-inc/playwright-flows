/**
 * Note that this test uses tools that require the usage of an LLM, so be
 * sure to have an appropriate LLM API key available. This can be done
 * by providing an environment variable (e.g. OPENAI_API_KEY, ANTHROPIC_API_KEY,
 * or GOOGLE_GENERATIVE_AI_API_KEY) or by configuring a flow runner using
 * the Donobu app.
 */
import { test } from 'donobu';

const title = 'Test for https://www.starbucks.com/menu';
const details = {
  annotation: {
    type: 'objective',
    description: `Assert that the featured menu page has fun, summer season vibes.
  
  Then find a store in the town of Stowe, Vermont. Assert that the address is "109 Main Street".
  Also ensure that the map shows Mt. Mansfield close by.`,
  },
};
test(title, details, async ({ page }) => {
  // Initializing web navigation.
  await page.goto('https://www.starbucks.com/menu');
  // Accepting the cookie consent to proceed with browsing the website.
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
  // Navigating to the featured menu page to check for summer season vibes as part of the overall objective.
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
  // Asserting that the featured menu page has fun, summer season vibes as required by the overall objective before proceeding to find a store in Stowe, Vermont and asserting its address and nearby landmarks like Mt. Mansfield on the map which is part of the overall objective..
  await page.visuallyAssert({
    assertionToTestFor:
      'The featured menu page has fun, summer season vibes, as indicated by phrases like "See you on the patio" and "Summer-Berry is back".',
  });
  // Navigating to the store locator page to find a store in Stowe, Vermont, as required by the overall objective.
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
  // Entering 'Stowe, Vermont' into the search box to find a store in that location as required by the overall objective.
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
  // Submitting the search for 'Stowe, Vermont' to find the store location as required by the overall objective.
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
  // Asserting the address of the Stowe, Vermont store and the proximity of Mt. Mansfield on the map as required by the overall objective after finding the store location in Stowe, Vermont and asserting its address and nearby landmarks like Mt. Mansfield on the map which is part of the overall objective..
  await page.visuallyAssert({
    assertionToTestFor:
      'The address of the Starbucks store in Stowe, Vermont is "109 Main Street" and the map shows Mt. Mansfield close by.',
  });
});
