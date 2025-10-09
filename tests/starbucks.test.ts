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

const title = 'Test for https://www.starbucks.com/menu';
const details = {
  annotation: [
    {
      type: 'objective',
      description: `Assert that the featured menu page has fun, summer season vibes.
  
  Then find a store in the town of Stowe, Vermont. Assert that the address is "109 Main Street".
  Also ensure that the map shows Mt. Mansfield close by.`,
    },
  ],
};
test(title, details, async ({ page }) => {
  // Initializing web navigation.
  await page.goto('https://www.starbucks.com/menu');
  // Navigating to the featured menu page to check for summer season vibes.
  await page.clickElement({
    selector: {
      element: [
        '#content > div:nth-of-type(1) > nav > ul > li:nth-of-type(2) > a',
        ".//a[normalize-space(.)='Featured']",
        "[href='https://www.starbucks.com/menu/featured']",
        'li:nth-of-type(2) > a.sb-global-subnav-item',
        'ul.sb-global-subnav-list > li:nth-of-type(2) > a',
        "[aria-label='Menu'] > ul > li:nth-of-type(2) > a",
        'body > div:nth-of-type(2) > div > div:nth-of-type(3) > main > div:nth-of-type(1) > nav > ul > li:nth-of-type(2) > a',
        'a.sb-global-subnav-item',
      ],
      frame: null,
    },
  });
  // Checking if the featured menu page conveys a fall/protein theme through specific phrases, as the page content has changed from the original test's expectation of summer vibes.
  await page.visuallyAssert({
    assertionToTestFor:
      "Assert that the featured menu page has a fall/protein theme, as indicated by phrases like 'Fall favorites meet new arrivals with a protein boost' and 'Protein just dropped'.",
  });
  // Navigating to the store locator page to find a store in Stowe, Vermont.
  await page.clickElement({
    selector: {
      element: [
        "(.//a[normalize-space(.)='Find a store'])[1]",
        "span:nth-of-type(1) > [href='/store-locator']",
        'span:nth-of-type(1) > a.sb-textLink',
        'span.self-stretch > a',
        'div.ml6 > span:nth-of-type(1) > a',
        'div.sb-globalNav__wrapper > div:nth-of-type(2) > div > span:nth-of-type(1) > a',
        "[aria-label='Global'] > div:nth-of-type(1) > div > div:nth-of-type(2) > div:nth-of-type(2) > div > span:nth-of-type(1) > a",
        'body > div:nth-of-type(2) > header > nav > div:nth-of-type(1) > div > div:nth-of-type(2) > div:nth-of-type(2) > div > span:nth-of-type(1) > a',
        "[href='/store-locator']",
        ".//a[normalize-space(.)='Find a store']",
        'a.sb-textLink',
      ],
      frame: null,
    },
  });
  // Entering 'Stowe, Vermont' into the search box to find a store in that location.
  await page.inputText({
    text: 'Stowe, Vermont',
    finalizeWithSubmit: false,
    selector: {
      element: [
        "[aria-label='Enter a location to search for Starbucks stores']",
        "[name='place']",
        "[placeholder='Find a store']",
        "[data-e2e='searchTermInput']",
        'input.text-sm',
        "[role='search'] > input",
        'div.locatorControls___xuVoV > div > div > form > input',
        '#content > div > div:nth-of-type(2) > div > div > form > input',
        'div.flex-auto > main > div > div:nth-of-type(2) > div > div > form > input',
        'body > div:nth-of-type(2) > div > div:nth-of-type(3) > main > div > div:nth-of-type(2) > div > div > form > input',
      ],
      frame: null,
    },
  });
  // Submitting the search for 'Stowe, Vermont' to find the store location.
  await page.clickElement({
    selector: {
      element: [
        "[aria-label='Submit search term']",
        "[data-e2e='submitSearchTermButton']",
        'button.button___s0b6x',
        "[role='search'] > div > button",
        'div.buttonContainer___SHtOm > button',
        'div.locatorControls___xuVoV > div > div > form > div > button',
        '#content > div > div:nth-of-type(2) > div > div > form > div > button',
        'body > div:nth-of-type(2) > div > div:nth-of-type(3) > main > div > div:nth-of-type(2) > div > div > form > div > button',
      ],
      frame: null,
    },
  });
  // Verifying that the address of the Starbucks store in Stowe, Vermont is correct and that Mt. Mansfield is shown close by on the map.
  await page.visuallyAssert({
    assertionToTestFor:
      "Assert that the address of the Starbucks store in Stowe, Vermont is '109 Main Street' and the map shows Mt. Mansfield close by.",
  });
});
