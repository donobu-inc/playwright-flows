import { expect, test } from '@donobu/test';

const CONTACT_URL = 'https://www.virvly.com/contact';
const CONTACT_API = '**/api/contact';

// The contact form emails the Virvly team. Block the endpoint by default so no
// run ever delivers a real message; tests that need a server reply register
// their own route, which takes precedence over this one.
test.beforeEach(async ({ page }) => {
  await page.route(CONTACT_API, (route) => route.abort());
  await page.goto(CONTACT_URL);
  // The site sets `scroll-behavior: smooth`. Cached steps replay faster than
  // the scroll animation, so a click can land while the button is still
  // moving and never register. Make scrolling instant for the test.
  await page.addStyleTag({
    content: 'html { scroll-behavior: auto !important; }',
  });
});

/**
 * The contact page offers a message form and the direct contact details a
 * visitor needs to reach the Virvly team.
 */
test(
  'Contact page shows the form and direct contact details',
  { tag: ['@virvly-contact-page-content'] },
  async ({ page }) => {
    await page.ai
      .within(page.locator('#contact-form'))
      .assert(
        'The region contains a name field, an email address field, a message field, and a "Send Message" button.',
      );
    await page.ai.assert(
      'The page promises a response within 24 hours and lists hello@virvly.com as the contact email.',
    );
    // The address appears in the footer too; locate the one in the contact card.
    const emailLink = await page.ai.locate(
      'The hello@virvly.com link in the "General & Business Email" card',
    );
    await expect(emailLink).toHaveAttribute('href', 'mailto:hello@virvly.com');
  },
);

/**
 * Sending the form without filling anything in is blocked, and nothing is
 * sent to the server.
 */
test(
  'Empty contact form is not submitted',
  { tag: ['@virvly-contact-empty-submit'] },
  async ({ page }) => {
    const sent: string[] = [];
    page.on('request', (request) => {
      if (request.url().includes('/api/contact')) sent.push(request.url());
    });

    await page.ai(
      'Click the "Send Message" button without filling in any field of the contact form',
    );

    // The browser blocks the submit and focuses the first missing field.
    await expect(page.locator('#contact-name')).toBeFocused();
    await expect(page.locator('#success-card')).toBeHidden();
    expect(sent).toHaveLength(0);
  },
);

/**
 * An email address without a domain suffix is rejected with an inline error,
 * and nothing is sent to the server.
 */
test(
  'Malformed email address is rejected',
  { tag: ['@virvly-contact-invalid-email'] },
  async ({ page }) => {
    const sent: string[] = [];
    page.on('request', (request) => {
      if (request.url().includes('/api/contact')) sent.push(request.url());
    });

    await page.ai(
      'Fill in the contact form with the name "Alex Mercer", the email address "alex@example" and the message "Do you cover weddings?", then click "Send Message"',
    );

    await page.ai
      .within(page.locator('#contact-form'))
      .assert('An error message says the email address is not valid.');
    await expect(page.locator('#success-card')).toBeHidden();
    expect(sent).toHaveLength(0);
  },
);

/**
 * A visitor who fills in the form correctly gets a confirmation, and the
 * server receives exactly what they typed.
 */
test(
  'Valid message is sent and confirmed',
  { tag: ['@virvly-contact-send-message'] },
  async ({ page }) => {
    await page.route(CONTACT_API, (route) =>
      route.fulfill({ json: { success: true, id: 'stub-message-abc123' } }),
    );
    const contactRequest = page.waitForRequest(CONTACT_API);

    await page.ai(
      'Fill in the contact form with the name "Alex Mercer", the email address "alex@example.com" and the message "Do you cover weddings?", then click "Send Message"',
    );

    expect((await contactRequest).postDataJSON()).toEqual({
      name: 'Alex Mercer',
      email: 'alex@example.com',
      message: 'Do you cover weddings?',
    });
    await expect(page.locator('#success-card')).toBeVisible();
    await page.ai
      .within(page.locator('#success-card'))
      .assert('The region confirms that the message was sent.');
  },
);

/**
 * When the server cannot deliver the message, the visitor is told so and can
 * try again instead of seeing a false confirmation.
 */
test(
  'Server failure is reported to the visitor',
  { tag: ['@virvly-contact-server-error'] },
  async ({ page }) => {
    await page.route(CONTACT_API, (route) =>
      route.fulfill({
        status: 500,
        json: { success: false, error: 'Mail service unavailable' },
      }),
    );

    // Worded apart from the success test so the two never share a cache
    // entry, and explicit that the failure is expected so the agent stops.
    await page.ai(
      'Fill in the contact form with the name "Alex Mercer", the email address "alex@example.com" and the message "Do you cover weddings?", then click "Send Message" exactly once. The send is expected to fail; do not retry, reload, or change anything afterwards.',
    );

    await expect(page.locator('#general-error')).toContainText(
      'Mail service unavailable',
    );
    await expect(page.locator('#success-card')).toBeHidden();
    await expect(
      page.getByRole('button', { name: 'Send Message' }),
    ).toBeEnabled();
  },
);
