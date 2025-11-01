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

const title = 'Fill out a survey';
const details = {
  annotation: [
    {
      type: 'objective',
      description: `Fill out a survey with fake data using AI assistance and verify successful submission by confirming the page navigates to a "Thank You" page`,
    },
  ],
};
test(title, details, async ({ page }) => {
  // Initializing web navigation.
  await page.goto('https://unstable-survey-dinoer.replit.app');
  // Filling out the "Your Name" field with fake data as required by the survey.
  await page
    .find('#\\:rj\\:-form-item', {
      failover: [
        ".//label[normalize-space()='Your Name *']/following-sibling::input",
        "[name='name']",
      ],
    })
    .inputText('John Smith');
  // Filling out the "Contact Email" field with fake data as required by the survey.
  await page
    .find('#\\:rk\\:-form-item', {
      failover: [
        ".//label[normalize-space()='Contact Email *']/following-sibling::input",
        "[name='email']",
      ],
    })
    .inputText('john.smith@example.com');
  // Clicking on the Occupation dropdown to select an occupation option for the survey.
  await page
    .find('#\\:rl\\:-form-item', {
      failover: [
        ".//button[normalize-space(.)='Select your occupation']",
        "[role='combobox']",
      ],
    })
    .click();
  // Selecting "Employed" from the occupation dropdown to complete the occupation field in the survey.
  await page
    .find('#radix-\\:rm\\: > div > div:nth-of-type(2)', {
      failover: [
        ".//div[normalize-space(.)='Employed']",
        "[role='presentation'] > div:nth-of-type(2)",
      ],
    })
    .click();
  // Clicking the Technology checkbox to select it as an interest in the survey.
  await page
    .find('#\\:ro\\:-form-item', {
      failover: [
        "div:nth-of-type(1) > [role='checkbox']",
        "div:nth-of-type(1) > [data-state='unchecked']",
      ],
    })
    .click();
  // Scrolling down to see more survey questions and options that need to be filled out.
  await page.find('html').scroll('DOWN');
  // Filling out the Suggestions field with fake data to complete the survey form.
  await page
    .find('#\\:rs\\:-form-item', {
      failover: [
        ".//label[normalize-space()='Suggestions (Optional)']/following-sibling::textarea",
        "[name='comments']",
      ],
    })
    .inputText(
      'Great survey! Would love to see more questions about emerging technologies.',
    );
  // Clicking the Next button to proceed to the next step of the survey.
  await page
    .find(".//button[normalize-space(.)='Next']", {
      failover: ['button.inline-flex', 'div.mt-8 > button'],
    })
    .click();
  // Clicking the Submit button to proceed with the survey submission and move to the Thank You page.
  await page
    .find(".//button[normalize-space(.)='Submit']", {
      failover: [
        'div.mt-8 > button:nth-of-type(2)',
        'div.bg-white > div:nth-of-type(2) > button:nth-of-type(2)',
      ],
    })
    .click();
  // Verifying that the survey has been completed successfully by confirming the URL matches the thank-you page pattern as required by the test assertion.
  await page.visuallyAssert({
    assertionToTestFor:
      'Assert that the current URL matches the pattern /thank-you/',
  });
});
