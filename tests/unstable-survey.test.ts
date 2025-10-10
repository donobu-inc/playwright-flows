import { test, expect } from 'donobu';

const title = 'Test for https://unstable-survey-dinoer.replit.app/thank-you';
const details = {
  annotation: [
    {
      type: 'objective',
      description: `Submit the survey with fake data and assert you land on a url with "thank-you" at the end.
`,
    },
  ],
};
test(title, details, async ({ page }) => {
  // Initializing web navigation.
  await page.goto('https://unstable-survey-dinoer.replit.app/thank-you');
  // Filling out the survey form with fake data by entering a full name.
  await page
    .find(
      ".//label[normalize-space()='Full Name *']/following-sibling::input",
      {
        failover: [
          "[name='name']",
          "[placeholder='Enter your full name']",
          'div:nth-of-type(1) > input.flex',
          'form.space-y-6 > div:nth-of-type(1) > input',
          'div.max-w-2xl > div:nth-of-type(3) > form > div:nth-of-type(1) > input',
          'div.min-h-screen > div > div:nth-of-type(3) > form > div:nth-of-type(1) > input',
          'body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(1) > input',
          'input.flex',
        ],
      },
    )
    .inputText('John Doe');
  // Filling out the survey form with fake data by entering a randomized email address.
  await page
    .find(
      ".//label[normalize-space()='Email Address *']/following-sibling::input",
      {
        failover: [
          "[name='email']",
          "[placeholder='Enter your email address']",
          'div:nth-of-type(2) > input.flex',
          'form.space-y-6 > div:nth-of-type(2) > input',
          'div.max-w-2xl > div:nth-of-type(3) > form > div:nth-of-type(2) > input',
          'div.min-h-screen > div > div:nth-of-type(3) > form > div:nth-of-type(2) > input',
          'body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(2) > input',
          'input.flex',
        ],
      },
    )
    .inputRandomizedEmailAddress('test@example.com');
  // Clicking on the 'Select your age group' dropdown to reveal the options for the age group.
  await page
    .find(".//button[normalize-space(.)='Select your age group']", {
      failover: [
        "[role='combobox']",
        "[data-state='closed']",
        "[data-placeholder='']",
        'button.flex',
        'form.space-y-6 > div:nth-of-type(3) > button',
        'div.max-w-2xl > div:nth-of-type(3) > form > div:nth-of-type(3) > button',
        'div.min-h-screen > div > div:nth-of-type(3) > form > div:nth-of-type(3) > button',
        'body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(3) > button',
      ],
    })
    .click();
  // Selecting '25-34' as the age group from the dropdown menu to provide fake data for the survey.
  await page
    .find(".//div[normalize-space(.)='25-34']", {
      failover: [
        "[role='presentation'] > div:nth-of-type(2)",
        'html > body > div:nth-of-type(2) > div > div > div:nth-of-type(2)',
        'body > div:nth-of-type(2) > div > div > div:nth-of-type(2)',
        "[role='option']",
        "[data-radix-collection-item='']",
        "[data-state='unchecked']",
        'div.relative',
      ],
    })
    .click();
  // Selecting 'Social Media' as the source for how the user heard about the survey to provide fake data.
  await page
    .find("div:nth-of-type(1) > [role='checkbox']", {
      failover: [
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
    })
    .click();
  // Scrolling down the page to reveal more of the survey form, including the 'Additional Comments' field and the 'Next' button.
  await page.find('html').scroll('DOWN');
  // Filling out the survey form with fake data by entering additional comments.
  await page
    .find(
      ".//label[normalize-space()='Additional Comments (Optional)']/following-sibling::textarea",
      {
        failover: [
          "[name='comments']",
          "[placeholder='Share any additional thoughts or comments']",
          'textarea.flex',
          'form.space-y-6 > div:nth-of-type(5) > textarea',
          'div.max-w-2xl > div:nth-of-type(3) > form > div:nth-of-type(5) > textarea',
          'div.min-h-screen > div > div:nth-of-type(3) > form > div:nth-of-type(5) > textarea',
          'body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(5) > textarea',
        ],
      },
    )
    .inputText('This is a fake comment for the survey.');
  // Clicking the 'Next' button to submit the survey form after filling in all the required fake data.
  await page
    .find(".//button[normalize-space(.)='Next']", {
      failover: [
        'button.inline-flex',
        'div.mt-8 > button',
        'form.space-y-6 > div:nth-of-type(6) > button',
        'div.max-w-2xl > div:nth-of-type(3) > form > div:nth-of-type(6) > button',
        'div.min-h-screen > div > div:nth-of-type(3) > form > div:nth-of-type(6) > button',
        'body > div > div > div > div:nth-of-type(3) > form > div:nth-of-type(6) > button',
      ],
    })
    .click();
  // Clicking the 'Submit' button to finalize the survey after reviewing the selections.
  await page
    .find(".//button[normalize-space(.)='Submit']", {
      failover: [
        'div.mt-8 > button:nth-of-type(2)',
        'div.bg-white > div:nth-of-type(2) > button:nth-of-type(2)',
        'div.max-w-2xl > div:nth-of-type(2) > div:nth-of-type(2) > button:nth-of-type(2)',
        'div.min-h-screen > div > div:nth-of-type(2) > div:nth-of-type(2) > button:nth-of-type(2)',
        'html > body > div > div > div > div:nth-of-type(2) > div:nth-of-type(2) > button:nth-of-type(2)',
        'body > div > div > div > div:nth-of-type(2) > div:nth-of-type(2) > button:nth-of-type(2)',
        'button.inline-flex',
      ],
    })
    .click();
  // Asserting that the current URL contains "thank-you" to confirm successful survey submission.
  await expect(page).toHaveURL(/thank-you/);
});
