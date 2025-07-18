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
        '#\\:rf\\:-form-item',
        "[placeholder='Enter\\ your\\ name']",
        'html > body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(1) > input',
        'div > input:nth-of-type(1)',
        'input',
        'div > :nth-child(2)',
      ],
      frame: null,
    },
  });
  // Entering an email address to continue the survey.
  await page.inputRandomizedEmailAddress({
    baseEmail: 'example@example.com',
    finalizeWithSubmit: false,
    selector: {
      element: [
        '#\\:rv\\:-form-item',
        "[placeholder='Enter\\ your\\ email\\ address']",
        'html > body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(2) > input',
        'div > input:nth-of-type(1)',
        'input',
        'div > :nth-child(2)',
      ],
      frame: null,
    },
  });
  // Selecting the age group to continue the survey.
  await page.clickElement({
    selector: {
      element: [
        '#\\:r10\\:-form-item',
        "//button[normalize-space(.)='Select your age group']",
        'html > body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(3) > button',
        "[data-state='closed']",
        "button[data-state='closed']",
        "[data-placeholder='']",
        "button[data-placeholder='']",
        'div > button:nth-of-type(1)',
        'button',
        'div > :nth-child(2)',
      ],
      frame: null,
    },
  });
  // Selecting the age group '18-24' to continue the survey.
  await page.clickElement({
    selector: {
      element: [
        "//div[normalize-space(.)='18-24']",
        'html > body > div:nth-of-type(2) > div > div > div:nth-of-type(1)',
        "[data-highlighted='']",
        "div[data-highlighted='']",
        "div[data-state='unchecked']",
        "[data-radix-collection-item='']",
        "div[data-radix-collection-item='']",
        "[data-state='unchecked']",
        'div > div:nth-of-type(1)',
        'div > :nth-child(1)',
        'div',
      ],
      frame: null,
    },
  });
  // Selecting how the user heard about the survey by clicking the checkbox.
  await page.clickElement({
    selector: {
      element: [
        '#\\:r13\\:-form-item',
        'html > body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > button',
        "[data-state='unchecked']",
        "button[data-state='unchecked']",
        'div > button:nth-of-type(1)',
        'button',
        'div > :nth-child(1)',
      ],
      frame: null,
    },
  });
  // Scrolling down to access the 'Next' button to proceed with the survey.
  await page.scroll({
    direction: 'DOWN',
  });
  // Submitting the current survey information to continue to the next page.
  await page.clickElement({
    selector: {
      element: [
        "//button[normalize-space(.)='Next']",
        'html > body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(6) > button',
        'div > button:nth-of-type(1)',
        'button',
        'div > :nth-child(1)',
      ],
      frame: null,
    },
  });
  // Re-entering the full name to satisfy the requirement.
  await page.inputText({
    text: 'John Doe',
    finalizeWithSubmit: false,
    selector: {
      element: [
        '#\\:ru\\:-form-item',
        "[placeholder='Enter\\ your\\ full\\ name']",
        'html > body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(1) > input',
        'div > input:nth-of-type(1)',
        'input',
        'div > :nth-child(2)',
      ],
      frame: null,
    },
  });
  // Attempting to proceed in the survey by clicking the 'Next' button again.
  await page.clickElement({
    selector: {
      element: [
        "//button[normalize-space(.)='Next']",
        'html > body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(6) > button',
        'div > button:nth-of-type(1)',
        'button',
        'div > :nth-child(1)',
      ],
      frame: null,
    },
  });
  // Submitting the reviewed selections to complete the survey.
  await page.clickElement({
    selector: {
      element: [
        "//button[normalize-space(.)='Submit']",
        'div > button:nth-of-type(2)',
        'html > body > div > div > div > div:nth-of-type(2) > div:nth-of-type(2) > button:nth-of-type(2)',
        'button',
        'div > :nth-child(2)',
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
