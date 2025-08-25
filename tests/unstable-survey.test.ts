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

const title = 'Test for https://unstable-survey-dinoer.replit.app';
const details = {
  annotation: [
    {
      type: 'objective',
      description: `Go through the survey and end the flow.`,
    },
  ],
};
test(title, details, async ({ page }) => {
  // Initializing web navigation.
  await page.goto('https://unstable-survey-dinoer.replit.app');
  // Entering the full name to proceed with the survey.
  await page.inputText({
    text: 'John Doe',
    finalizeWithSubmit: false,
    selector: {
      element: [
        '#\\:r0\\:-form-item',
        '#root > div > div > div:nth-of-type(3) > form > div:nth-of-type(1) > input',
        ".//label[normalize-space()='Full Name *']/following-sibling::input",
        "[name='name']",
        "[placeholder='Enter your full name']",
        'div:nth-of-type(1) > input.flex',
        'form.space-y-6 > div:nth-of-type(1) > input',
        'div.max-w-2xl > div:nth-of-type(3) > form > div:nth-of-type(1) > input',
        'div.min-h-screen > div > div:nth-of-type(3) > form > div:nth-of-type(1) > input',
        'body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(1) > input',
        'input.flex',
      ],
      frame: null,
    },
  });
  // Entering a valid randomized email address.
  await page.inputRandomizedEmailAddress({
    baseEmail: 'example@example.com',
    finalizeWithSubmit: false,
    selector: {
      element: [
        '#\\:r1\\:-form-item',
        '#root > div > div > div:nth-of-type(3) > form > div:nth-of-type(2) > input',
        ".//label[normalize-space()='Email Address *']/following-sibling::input",
        "[name='email']",
        "[placeholder='Enter your email address']",
        'div:nth-of-type(2) > input.flex',
        'form.space-y-6 > div:nth-of-type(2) > input',
        'div.max-w-2xl > div:nth-of-type(3) > form > div:nth-of-type(2) > input',
        'div.min-h-screen > div > div:nth-of-type(3) > form > div:nth-of-type(2) > input',
        'body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(2) > input',
        'input.flex',
      ],
      frame: null,
    },
  });
  // Selecting the age group dropdown to choose an option.
  await page.clickElement({
    selector: {
      element: [
        '#\\:r2\\:-form-item',
        '#root > div > div > div:nth-of-type(3) > form > div:nth-of-type(3) > button',
        ".//button[normalize-space(.)='Select your age group']",
        "[role='combobox']",
        "[data-state='closed']",
        "[data-placeholder='']",
        'button.flex',
        'form.space-y-6 > div:nth-of-type(3) > button',
        'div.max-w-2xl > div:nth-of-type(3) > form > div:nth-of-type(3) > button',
        'div.min-h-screen > div > div:nth-of-type(3) > form > div:nth-of-type(3) > button',
        'body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(3) > button',
      ],
      frame: null,
    },
  });
  // Selecting '18-24' from the age group dropdown to continue the survey.
  await page.clickElement({
    selector: {
      element: [
        '#radix-\\:r3\\: > div > div:nth-of-type(1)',
        ".//div[normalize-space(.)='18-24']",
        "[data-highlighted='']",
        "[role='presentation'] > div:nth-of-type(1)",
        'html > body > div:nth-of-type(2) > div > div > div:nth-of-type(1)',
        'body > div:nth-of-type(2) > div > div > div:nth-of-type(1)',
        "[role='option']",
        "[data-radix-collection-item='']",
        "[data-state='unchecked']",
        'div.relative',
      ],
      frame: null,
    },
  });
  // Selecting the 'Social Media' checkbox for 'How did you hear about us?' to proceed with the survey.
  await page.clickElement({
    selector: {
      element: [
        '#\\:r5\\:-form-item',
        "div:nth-of-type(1) > [role='checkbox']",
        "div:nth-of-type(1) > [data-state='unchecked']",
        'div:nth-of-type(1) > button.peer',
        'form.space-y-6 > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > button',
        'div.max-w-2xl > div:nth-of-type(3) > form > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > button',
        'div.min-h-screen > div > div:nth-of-type(3) > form > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > button',
        'body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > button',
        "[role='checkbox']",
        "[data-state='unchecked']",
        'button.peer',
      ],
      frame: null,
    },
  });
  // Scrolling down to access the 'Next' button to proceed with the survey.
  await page.scroll({
    direction: 'DOWN',
    selector: {
      element: ['html'],
      frame: null,
    },
  });
  // Proceeding to the next section of the survey by clicking the 'Next' button.
  await page.clickElement({
    selector: {
      element: [
        '#root > div > div > div:nth-of-type(3) > form > div:nth-of-type(6) > button',
        ".//button[normalize-space(.)='Next']",
        'button.inline-flex',
        'div.mt-8 > button',
        'form.space-y-6 > div:nth-of-type(6) > button',
        'div.max-w-2xl > div:nth-of-type(3) > form > div:nth-of-type(6) > button',
        'div.min-h-screen > div > div:nth-of-type(3) > form > div:nth-of-type(6) > button',
        'body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(6) > button',
      ],
      frame: null,
    },
  });
  // Submitting the survey after reviewing the selections.
  await page.clickElement({
    selector: {
      element: [
        '#root > div > div > div:nth-of-type(2) > div:nth-of-type(2) > button:nth-of-type(2)',
        ".//button[normalize-space(.)='Submit']",
        'div.mt-8 > button:nth-of-type(2)',
        'div.bg-white > div:nth-of-type(2) > button:nth-of-type(2)',
        'div.max-w-2xl > div:nth-of-type(2) > div:nth-of-type(2) > button:nth-of-type(2)',
        'div.min-h-screen > div > div:nth-of-type(2) > div:nth-of-type(2) > button:nth-of-type(2)',
        'html > body > div > div > div > div:nth-of-type(2) > div:nth-of-type(2) > button:nth-of-type(2)',
        'body > div > div > div > div:nth-of-type(2) > div:nth-of-type(2) > button:nth-of-type(2)',
        'button.inline-flex',
      ],
      frame: null,
    },
  });
  // Verifying that the survey was submitted successfully as indicated by the thank you message.
  await page.visuallyAssert({
    assertionToTestFor:
      'Assert that the webpage displays a message indicating that the survey was submitted successfully.',
  });
});
