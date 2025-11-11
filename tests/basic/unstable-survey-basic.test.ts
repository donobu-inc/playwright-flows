import { test } from 'donobu';

const title = 'Test for https://unstable-survey-dinoer.replit.app';
const details = {
  annotation: [
    {
      type: 'objective',
      description: `Fill out the all of the survey questions with fake data go through
the submission process until you get to a "Thank You" page.
`,
    },
  ],
};
test(title, details, async ({ page }) => {
  // Initializing web navigation.
  await page.goto('https://unstable-survey-dinoer.replit.app');
  // Filling in the Last Name field with fake data to complete the survey.
  await page
    .find("[data-testid='input-lastname']", {
      failover: [
        ".//label[normalize-space()='Last Name *']/following-sibling::input",
      ],
    })
    .inputText('Smith');
  // Filling in the Email Address field with fake data to complete the survey.
  await page
    .find(
      ".//label[normalize-space()='Email Address *']/following-sibling::input",
      { failover: ["[name='email']"] },
    )
    .inputText('john.smith@example.com');
  // Selecting an age group option to complete the survey questions.
  await page
    .find("[data-testid='radio-age-18-24']", {
      failover: ["div:nth-of-type(1) > [role='radio']"],
    })
    .click();
  // Scrolling down to see if there are more survey questions below the current view that need to be filled out.
  await page.find('html').scroll('DOWN');
  // Selecting the "Social Media" checkbox for the "How did you hear about us?" question to complete the survey with fake data.
  await page
    .find("div:nth-of-type(1) > [role='checkbox']", {
      failover: ["div:nth-of-type(1) > [data-state='unchecked']"],
    })
    .click();
  // Filling in the Additional Comments field with fake data to complete the survey.
  await page
    .find(
      ".//label[normalize-space()='Additional Comments (Optional)']/following-sibling::textarea",
      { failover: ["[name='comments']"] },
    )
    .inputText('This is a great survey! I enjoyed answering these questions.');
  // Clicking the Next button to proceed to the next step of the survey submission process.
  await page
    .find(".//button[normalize-space(.)='Next']", {
      failover: ['button.inline-flex', 'div.mt-8 > button'],
    })
    .click();
  // Clicking the Submit button to proceed with the survey submission process and move toward the Thank You page.
  await page
    .find(".//button[normalize-space(.)='Submit']", {
      failover: [
        'div.mt-8 > button:nth-of-type(2)',
        'div.bg-white > div:nth-of-type(2) > button:nth-of-type(2)',
      ],
    })
    .click();
});
