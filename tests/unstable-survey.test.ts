/**
 * Be sure that Donobu is installed before running this script...
 *    'npm install donobu' or 'yarn add donobu'
 *
 * Also, be sure that Playwright's browsers are installed...
 *    'npx playwright install'
 */
import { test } from 'donobu';

const testTitle = 'Test for https://unstable-survey-dinoer.replit.app';
const testDetails = {
  annotation: {
    type: 'objective',
    description: `Go through the survey and end the flow.`,
  },
};
test(testTitle, testDetails, async ({ page }) => {
  // Initializing web navigation.
  await page.goto('https://unstable-survey-dinoer.replit.app');
  // Filling out the name field in the survey form to progress through the survey.
  await page.inputText({
    finalizeWithSubmit: false,
    text: 'John Doe',
    selector: {
      element: [
        '#\\:rf\\:-form-item',
        "[placeholder='Enter\\ your\\ name']",
        'div > input:nth-of-type(1)',
        'input',
        'div > :nth-child(2)',
      ],
      frame: null,
    },
  });
  // Filling out the email field in the survey form to continue progressing through the survey.
  await page.inputText({
    finalizeWithSubmit: false,
    text: 'johndoe@example.com',
    selector: {
      element: [
        '#\\:rg\\:-form-item',
        "[placeholder='Enter\\ your\\ contact\\ email']",
        'div > input:nth-of-type(1)',
        'input',
        'div > :nth-child(2)',
      ],
      frame: null,
    },
  });
  // Clicking on the occupation dropdown to select an occupation, which is a required field in the survey.
  await page.clickElement({
    selector: {
      element: [
        '#\\:rh\\:-form-item',
        "[data-state='closed']",
        "button[data-state='closed']",
        "[data-placeholder='']",
        "button[data-placeholder='']",
        "//button[normalize-space(.)='Select your occupation']",
        'div > button:nth-of-type(1)',
        'button',
        'div > :nth-child(2)',
      ],
      frame: null,
    },
  });
  // Selecting "Employed" as the occupation option to complete this required field in the survey.
  await page.clickElement({
    selector: {
      element: [
        "//div[normalize-space(.)='Employed']",
        "div[data-state='unchecked']",
        "[data-radix-collection-item='']",
        "div[data-radix-collection-item='']",
        "[data-state='unchecked']",
        'div > div:nth-of-type(2)',
        'div > :nth-child(2)',
        'div',
      ],
      frame: null,
    },
  });
  // Selecting the "Technology" checkbox as one of the interests to complete this required field in the survey.
  await page.clickElement({
    selector: {
      element: [
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
  // Scrolling down to see more of the survey form and find the submit button or additional fields that need to be completed.
  await page.scroll({
    direction: 'DOWN',
  });
  // Adding an optional suggestion to the survey form before submitting it.
  await page.inputText({
    finalizeWithSubmit: false,
    text: 'The survey was easy to complete. Thank you.',
    selector: {
      element: [
        '#\\:ro\\:-form-item',
        'div > textarea:nth-of-type(1)',
        'textarea',
        "[placeholder='Share\\ any\\ suggestions']",
        "//label[text()='Suggestions (Optional)']/following-sibling::textarea",
        'div > :nth-child(2)',
      ],
      frame: null,
    },
  });
  // Clicking the "Next" button to submit the survey form and proceed to the next step or completion page.
  await page.clickElement({
    selector: {
      element: [
        "//button[normalize-space(.)='Next']",
        'div > button:nth-of-type(1)',
        'button',
        'div > :nth-child(1)',
      ],
      frame: null,
    },
  });
  // Clicking the "Submit" button to finalize the survey and proceed to the final step.
  await page.clickElement({
    selector: {
      element: [
        "//button[normalize-space(.)='Submit']",
        'div > button:nth-of-type(2)',
        'button',
        'div > :nth-child(2)',
      ],
      frame: null,
    },
  });
});
