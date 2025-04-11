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
import { test } from "donobu";
import { gptClientFixture } from "donobu";

const testTitle = "Test for https://en.wikipedia.org/wiki/Software_testing";
const testDetails = {
  annotation: {
    type: "objective",
    description: `View the article history and verify the earliest revision.
  
  Click on View history link
  Click on the oldest link to sort by oldest first
  Assert that first row in results shows date of the first revision listed on this page as 16 April 2004`,
  },
};
test.extend({ gptClient: gptClientFixture() })(
  testTitle,
  testDetails,
  async ({ page }) => {
    // Initializing web navigation.
    await page.goto("https://en.wikipedia.org/wiki/Software_testing");
    // Clicking on the 'View history' link to access the article's revision history.
    await page.clickElement({
      selector: {
        element: [
          "[href='\\/w\\/index\\.php\\?title\\=Software_testing\\&action\\=history']",
          "a[href='\\/w\\/index\\.php\\?title\\=Software_testing\\&action\\=history']",
          "//a[normalize-space(.)='View history']",
          "li > a:nth-of-type(1)",
          "li > :nth-child(1)",
          "a",
        ],
        frame: null,
      },
    });
    // Clicking on the 'oldest' link to sort the revisions by oldest first.
    await page.clickElement({
      selector: {
        element: [
          ".mw-lastlink",
          "[href='\\/w\\/index\\.php\\?title\\=Software_testing\\&action\\=history\\&dir\\=prev']",
          "a[href='\\/w\\/index\\.php\\?title\\=Software_testing\\&action\\=history\\&dir\\=prev']",
          "//a[normalize-space(.)='oldest']",
          "a.mw-lastlink",
          "div > a:nth-of-type(1)",
          "div > :nth-child(2)",
          "a",
        ],
        frame: null,
      },
    });
    // Verifying that the first revision date matches the expected date of 16 April 2004.
    await page.visuallyAssert({
      assertionToTestFor:
        "Assert that the first row in results shows date of the first revision listed on this page as 16 April 2004.",
    });
  }
);
