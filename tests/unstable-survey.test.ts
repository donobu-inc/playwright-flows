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
  // Selecting the occupation to proceed with the survey.
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
  // Selecting how the user heard about the survey.
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
  // Scrolling down to access the 'Next' button.
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
});
