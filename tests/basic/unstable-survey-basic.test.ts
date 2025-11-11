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
  // Filling in the Your Name field with fake data to complete the survey.
  await page
    .find('#root', { failover: ['html > body > div', 'body > div'] })
    .inputText('John Smith');
  // Clicking on the Your Name input field to focus it and clear the placeholder text before entering the name.
  await page
    .find('#\\:rj\\:-form-item', {
      failover: [
        ".//label[normalize-space()='Your Name *']/following-sibling::input",
        "[name='name']",
      ],
    })
    .click();
  // Filling in the Your Name field with fake data to complete the survey.
  await page
    .find('#\\:rj\\:-form-item', {
      failover: [
        ".//label[normalize-space()='Your Name *']/following-sibling::input",
        "[name='name']",
      ],
    })
    .inputText('John Smith');
  // Filling in the Contact Email field with fake data to complete the survey.
  await page
    .find('#\\:rk\\:-form-item', {
      failover: [
        ".//label[normalize-space()='Contact Email *']/following-sibling::input",
        "[name='email']",
      ],
    })
    .inputText('john.smith@example.com');
  // Clicking on the Occupation dropdown to open it and select an occupation option.
  await page
    .find('#\\:rl\\:-form-item', {
      failover: [
        ".//button[normalize-space(.)='Select your occupation']",
        "[role='combobox']",
      ],
    })
    .click();
  // Selecting the Employed occupation option to complete the survey questions.
  await page
    .find('#radix-\\:rm\\: > div > div:nth-of-type(2)', {
      failover: [
        ".//div[normalize-space(.)='Employed']",
        "[role='presentation'] > div:nth-of-type(2)",
      ],
    })
    .click();
  // Selecting the Technology checkbox for the "What interests you?" question to complete the survey with fake data.
  await page
    .find('#\\:ro\\:-form-item', {
      failover: [
        "div:nth-of-type(1) > [role='checkbox']",
        "div:nth-of-type(1) > [data-state='unchecked']",
      ],
    })
    .click();
  // Filling in the Suggestions (Optional) field with fake data to complete the survey.
  await page
    .find('#\\:rs\\:-form-item', {
      failover: [
        ".//label[normalize-space()='Suggestions (Optional)']/following-sibling::textarea",
        "[name='comments']",
      ],
    })
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
  // Verifying that the Thank You page has been reached successfully after completing the survey submission process.
  await page.run('assertPageText', {
    text: 'Thank You!',
  });
});
