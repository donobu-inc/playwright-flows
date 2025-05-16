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
  // Filling in the name as part of the survey requirements.
  await page.inputText({
    text: 'John Doe',
    finalizeWithSubmit: false,
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
  // Providing a contact email as part of completing the survey form.
  await page.inputRandomizedEmailAddress({
    baseEmail: 'example@gmail.com',
    finalizeWithSubmit: false,
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
  // Clicking the occupation dropdown to choose an option.
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
  // Selecting 'Employed' in the occupation field to complete the survey.
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
  // Indicating interest in technology as part of the survey.
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
  // Scrolling down to access more of the survey elements like the 'Next' button.
  await page.scroll({
    direction: 'DOWN',
  });
  // Adding a suggestion to complete the optional part of the survey.
  await page.inputText({
    text: 'Looking forward to more features.',
    finalizeWithSubmit: false,
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
  // Proceeding to the next page of the survey after filling required fields.
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
  // Filling in the name as part of the survey requirements.
  await page.inputText({
    text: 'John Doe',
    finalizeWithSubmit: false,
    selector: {
      element: [
        '#\\:r18\\:-form-item',
        "[placeholder='Enter\\ your\\ full\\ name']",
        'div > input:nth-of-type(1)',
        'input',
        'div > :nth-child(2)',
      ],
      frame: null,
    },
  });
  // Providing a contact email as part of completing the survey form.
  await page.inputRandomizedEmailAddress({
    baseEmail: 'example@gmail.com',
    finalizeWithSubmit: false,
    selector: {
      element: [
        '#\\:r19\\:-form-item',
        "[placeholder='Enter\\ your\\ email\\ address']",
        'div > input:nth-of-type(1)',
        'input',
        'div > :nth-child(2)',
      ],
      frame: null,
    },
  });
  // Selecting an age group to continue with the survey.
  await page.clickElement({
    selector: {
      element: [
        '#\\:r1a\\:-form-item',
        "[data-state='closed']",
        "button[data-state='closed']",
        "[data-placeholder='']",
        "button[data-placeholder='']",
        "//button[normalize-space(.)='Select your age group']",
        'div > button:nth-of-type(1)',
        'button',
        'div > :nth-child(2)',
      ],
      frame: null,
    },
  });
  // Choosing an age group to complete the field and move to the next step.
  await page.clickElement({
    selector: {
      element: [
        "//div[normalize-space(.)='25-34']",
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
  // Indicating how the user heard about the service to complete the survey.
  await page.clickElement({
    selector: {
      element: [
        '#\\:r1d\\:-form-item',
        "[data-state='unchecked']",
        "button[data-state='unchecked']",
        'div > button:nth-of-type(1)',
        'button',
        'div > :nth-child(1)',
      ],
      frame: null,
    },
  });
  // Proceeding to the next page of the survey after completing required fields.
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
  // Submitting the completed survey form to finish the process.
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
