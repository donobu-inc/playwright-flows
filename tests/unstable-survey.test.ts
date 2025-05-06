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
  // Entering the full name to proceed with the survey.
  await page.inputText({
    text: 'John Doe',
    finalizeWithSubmit: false,
    selector: {
      element: [
        '#\\:r0\\:-form-item',
        "[placeholder='Enter\\ your\\ full\\ name']",
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
        '#\\:r1\\:-form-item',
        "[placeholder='Enter\\ your\\ email\\ address']",
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
        '#\\:r2\\:-form-item',
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
  // Selecting the age group to continue the survey.
  await page.clickElement({
    selector: {
      element: [
        "[data-highlighted='']",
        "div[data-highlighted='']",
        "//div[normalize-space(.)='18-24']",
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
  // Selecting how the user heard about the survey.
  await page.clickElement({
    selector: {
      element: [
        '#\\:r5\\:-form-item',
        "[data-state='unchecked']",
        "button[data-state='unchecked']",
        'div > button:nth-of-type(1)',
        'button',
        'div > :nth-child(1)',
      ],
      frame: null,
    },
  });
  // Scrolling down to access the 'Next' button to proceed.
  await page.scroll({
    direction: 'DOWN',
  });
  // Submitting the current survey information to continue to the next page.
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
  // Submitting the reviewed selections to complete the survey.
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
