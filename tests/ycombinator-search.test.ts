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

const testTitle = "Test for https://news.ycombinator.com";
const testDetails = {
  annotation: {
    type: "objective",
    description: `Check the search results for YCombinator
  1) Scroll down all the way to see the search box and submit search for "dogfooding".
  2) Assert that the search results show "The Ultimate Dogfooding Story" in the top few links.`,
  },
};
test.extend({ gptClient: gptClientFixture() })(
  testTitle,
  testDetails,
  async ({ page }) => {
    // Initializing web navigation.
    await page.goto("https://news.ycombinator.com");
    // Scrolling down to access the search box at the bottom of the page.
    await page.scroll({
      direction: "DOWN",
    });
    // Entering the search term 'dogfooding' to find relevant results.
    await page.inputText({
      text: "dogfooding",
      finalizeWithSubmit: true,
      selector: {
        element: [
          "form > :nth-child(1)",
          "form > input:nth-of-type(1)",
          "input",
        ],
        frame: null,
      },
    });
    // Verifying that 'The Ultimate Dogfooding Story' is present in the search results.
    await page.assertPageText({
      text: "The Ultimate Dogfooding Story",
    });
  }
);
