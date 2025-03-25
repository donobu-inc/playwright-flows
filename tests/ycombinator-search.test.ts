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
import { openAiClientFixture } from "donobu";

// Overall objective:
//   Check the seach results for YCombinator
//     1) Scroll down all the way to see the search box and submit search for "dogfooding".
//     2) Assert that the search results show "The Ultimate Dogfooding Story" in the top few links.
test.extend({
  gptClient: openAiClientFixture("gpt-4o"),
})("Test for https://news.ycombinator.com", async ({ page }) => {
  // Initializing web navigation.
  await page.goto("https://news.ycombinator.com");
  // Scrolling down to locate the search box for inputting the search term.
  await page.scroll({
    direction: "DOWN",
  });
  // Inputting the search term 'dogfooding' to find relevant results.
  await page.inputText({
    text: "dogfooding",
    finalizeWithSubmit: true,
    selector: {
      element: ["form > :nth-child(1)", "form > input:nth-of-type(1)", "input"],
      frame: null,
    },
  });
  // Verifying that the search results include 'The Ultimate Dogfooding Story' as required by the objective.
  await page.visuallyAssert({
    assertionToTestFor:
      "Assert that the search results show 'The Ultimate Dogfooding Story' in the top few links.",
  });
});
