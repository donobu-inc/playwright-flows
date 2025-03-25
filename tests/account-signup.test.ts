/**
 * Be sure that Donobu is installed before running this script...
 *    'npm install donobu' or 'yarn add donobu'
 *
 * Also, be sure that Playwright's browsers are installed...
 *    'npx playwright install'
 */
import { test } from "donobu";

// Overall objective:
//   Create an account on this website.
//
//     Use a random email variation of myemail@example.com
//
//     Make up reasonable data including passwords to fill all the forms.
test("Test for https://stage.everbutton.com", async ({ page }) => {
  // Initializing web navigation.
  await page.goto("https://stage.everbutton.com");
  // Navigating to the registration page to create a new account.
  await page.clickElement({
    selector: {
      element: [
        "[href='\\/user\\/register']",
        "a[href='\\/user\\/register']",
        "//a[normalize-space(.)='Register']",
        ".nav-link",
        "li > :nth-child(1)",
        "li > a:nth-of-type(1)",
        "a.nav-link",
        "a",
      ],
      frame: null,
    },
  });
  // Entering a name to complete the registration form.
  await page.inputText({
    text: "John Doe",
    finalizeWithSubmit: false,
    selector: {
      element: [
        "#name",
        "div > input:nth-of-type(1)",
        "input",
        "div > :nth-child(2)",
      ],
      frame: null,
    },
  });
  // Entering a new randomized email to complete the registration form.
  await page.inputRandomizedEmailAddress({
    baseEmail: "myemail@example.com",
    finalizeWithSubmit: false,
    selector: {
      element: [
        "#email",
        "div > input:nth-of-type(1)",
        "input",
        "div > :nth-child(2)",
      ],
      frame: null,
    },
  });
  // Submitting the registration form to create a new account.
  await page.clickElement({
    selector: {
      element: [
        "//button[normalize-space(.)='Register']",
        "div > button:nth-of-type(1)",
        "button",
        "div > :nth-child(1)",
      ],
      frame: null,
    },
  });
});
