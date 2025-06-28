/**
 * Note that this test uses tools that require the usage of an LLM, so be
 * sure to have an appropriate LLM API key available. This can be done
 * by providing an environment variable (e.g. OPENAI_API_KEY, ANTHROPIC_API_KEY,
 * or GOOGLE_GENERATIVE_AI_API_KEY) or by configuring a flow runner using
 * the Donobu app.
 */
import { test } from 'donobu';

const title = 'Test for https://unstable-survey-dinoer.replit.app';
const details = {
  annotation: {
    type: 'objective',
    description: `Go through the survey and end the flow.`,
  },
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
        "[placeholder='Enter\\ your\\ name']",
        'html > body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(1) > input',
        '#\\:rf\\:-form-item',
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
        "[placeholder='Enter\\ your\\ contact\\ email']",
        'html > body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(2) > input',
        '#\\:rg\\:-form-item',
        'div > input:nth-of-type(1)',
        'input',
        'div > :nth-child(2)',
      ],
      frame: null,
    },
  });
  // Interacting with the age group dropdown to select an option.
  await page.clickElement({
    selector: {
      element: [
        "//button[normalize-space(.)='Select your occupation']",
        'html > body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(3) > button',
        '#\\:rh\\:-form-item',
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
  // Selecting the occupation for the survey.
  await page.clickElement({
    selector: {
      element: [
        "//div[normalize-space(.)='Student']",
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
  // Scrolling down to access the 'Next' button to proceed.
  await page.scroll({
    direction: 'DOWN',
  });
  // Choosing interests to proceed with the survey.
  await page.clickElement({
    selector: {
      element: [
        'html > body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(1) > button',
        '#\\:rk\\:-form-item',
        "[data-state='unchecked']",
        "button[data-state='unchecked']",
        'div > button:nth-of-type(1)',
        'button',
        'div > :nth-child(1)',
      ],
      frame: null,
    },
  });
  // Choosing interests to proceed with the survey.
  await page.clickElement({
    selector: {
      element: [
        'html > body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(4) > div:nth-of-type(2) > div:nth-of-type(2) > button',
        '#\\:rl\\:-form-item',
        "[data-state='unchecked']",
        "button[data-state='unchecked']",
        'div > button:nth-of-type(1)',
        'button',
        'div > :nth-child(1)',
      ],
      frame: null,
    },
  });
  // Advancing to the next page of the survey.
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
  // Finalizing and submitting the survey form.
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
  // Ensuring the completion message is displayed after submission.
  await page.visuallyAssert({
    assertionToTestFor:
      'Assert that a thank you message is displayed indicating successful survey submission.',
  });
});
