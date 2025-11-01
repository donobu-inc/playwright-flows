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

const title = 'Test for https://www.starbucks.com';
const details = {
  annotation: [
    {
      type: 'objective',
      description: `Test the Starbucks website by navigating to the featured menu page, verifying it has a fall vibe, then finding a Starbucks store in Stowe, Vermont and confirming the map displays Mt. Mansfield nearby.`,
    },
  ],
};
test(title, details, async ({ page }) => {
  // Initializing web navigation.
  await page.goto('https://www.starbucks.com');
  // Navigating to the featured menu page by clicking on the MENU link in the navigation bar.
  await page
    .find("(.//a[normalize-space(.)='Menu'])[1]", {
      failover: [
        "div:nth-of-type(2) > div:nth-of-type(1) > ul > li:nth-of-type(1) > [href='/menu']",
        'li:nth-of-type(1) > a.sb-globalNav__desktopLink',
      ],
    })
    .click();
  // Navigating to the featured menu page by clicking on the Featured tab to view the featured menu items.
  await page
    .find(".//a[normalize-space(.)='Featured']", {
      failover: [
        "[href='https://www.starbucks.com/menu/featured']",
        'li:nth-of-type(2) > a.sb-global-subnav-item',
      ],
    })
    .click();
  // Verifying that the featured menu page has a fall vibe by checking for fall-themed content and messaging.
  await page.visuallyAssert({
    assertionToTestFor: 'Assert that the featured menu page has a fall vibe.',
  });
  // Navigating to the store locator to find a Starbucks store in Stowe, Vermont as required by the test.
  await page
    .find("(.//a[normalize-space(.)='Find a store'])[1]", {
      failover: [
        "span:nth-of-type(1) > [href='/store-locator']",
        'span:nth-of-type(1) > a.sb-textLink',
      ],
    })
    .click();
  // Searching for a Starbucks store in Stowe, Vermont by entering the location in the search field.
  await page
    .find("[aria-label='Enter a location to search for Starbucks stores']", {
      failover: ["[name='place']", "[placeholder='Find a store']"],
    })
    .inputText('Stowe, Vermont');
  // Selecting the first search result "Stowe Vermont, USA" to search for Starbucks stores in that location.
  await page
    .find(
      ".//div[normalize-space(.)='StoweVermont, USAVermont Route 100Stowe, VT, USAVT-108Stowe, VT, USA']",
      {
        failover: ['div.pac-container', 'html.js > body > div:nth-of-type(6)'],
      },
    )
    .click();
  // Verifying that a store in Stowe, Vermont is found and the map shows Mt. Mansfield close by, as required by the test assertion.
  await page.visuallyAssert({
    assertionToTestFor:
      'Assert that a store in Stowe, Vermont is found and the map shows Mt. Mansfield close by.',
  });
});
