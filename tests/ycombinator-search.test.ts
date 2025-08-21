import { test } from 'donobu';

const title = 'Test for https://news.ycombinator.com';
const details = {
  annotation: [
    {
      type: 'objective',
      description: `Scroll down to find the search box and then do a search for "mac app for web testing".
Assert that one of the top search results is for "Donobu".`,
    },
  ],
};
test(title, details, async ({ page }) => {
  // Initializing web navigation.
  await page.goto('https://news.ycombinator.com');
  // Scrolling down the page to find the search box.
  await page.scroll({
    direction: 'DOWN',
    selector: {
      element: ['body'],
      frame: null,
    },
  });
  // Inputting the search query 'mac app for web testing' into the search box to find relevant results.
  await page.inputText({
    text: 'mac app for web testing',
    finalizeWithSubmit: true,
    selector: {
      element: [
        '#hnmain > tbody > tr:nth-of-type(4) > td > center > form > input',
      ],
      frame: null,
    },
  });
});
