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
  // Filling out the survey form.
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
  // Filling out the survey form.
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
  // Attempting to select the occupation for the survey form.
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
  // Choosing the appropriate occupation in the survey form.
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
  // Indicating interests in the survey form.
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
  // Scrolling to see the submit button for the survey form.
  await page.scroll({
    direction: 'DOWN',
  });
  // Completing the survey and proceeding to the next step.
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
  // Completing the survey process by submitting the final review page.
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
