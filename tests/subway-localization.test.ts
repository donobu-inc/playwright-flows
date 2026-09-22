import { expect, test } from '@donobu/test';

const FR_CA_HOME = 'https://www.subway.com/fr-ca/';

test.beforeEach(async ({ page }) => {
  // subway.com sits behind a bot manager that refuses automated browsers
  // from most networks with an HTTP/2 reset. That is a deliberate control,
  // not a bug to work around: run this spec from a runner Subway has
  // allowlisted. Anywhere else, skip rather than fail.
  const response = await page.goto(FR_CA_HOME).catch((error: Error) => {
    if (/ERR_HTTP2_PROTOCOL_ERROR|ERR_CONNECTION_RESET/.test(error.message)) {
      return null;
    }
    throw error;
  });
  test.skip(
    response === null,
    'subway.com refused the automated browser; run from an allowlisted runner',
  );

  // Close the consent banner rather than accept it, so it cannot cover the
  // regions the scoped assertions below judge from.
  await page.ai(
    'Close the cookie banner with its "Fermer" (close) button. Do not accept cookies.',
  );
});

/**
 * The French-Canadian home page is served in French: document language,
 * page title, main navigation, hero banner, and footer are all localized,
 * and following the main navigation keeps the visitor on French pages.
 */
test(
  'French-Canadian home page is localized',
  { tag: ['@subway-fr-ca-home-localized'] },
  async ({ page }) => {
    await expect(page).toHaveTitle(/Accueil/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'fr-CA');

    await page.ai
      .within(page.locator('header'))
      .assert(
        'Every visible navigation label is written in French (for example "Menu", "Trouver un restaurant", "Récompenses", "Cartes-cadeaux", "Service de traiteur") and the order button reads "Passer la commande".',
      );
    await page.ai
      .within('the hero banner at the top of the page')
      .assert(
        'The headline and its call-to-action button are written in French.',
      );
    await page.ai
      .within(page.locator('footer'))
      .assert(
        'The column headings and their links are written in French, and the language selector shows "CA Français".',
      );

    // Following the main navigation keeps the visitor in the fr-ca locale.
    await page.ai('Open the "Menu" page from the main navigation');
    await expect(page).toHaveURL(/\/fr-ca\/menunutrition\/menu/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'fr-CA');
    await page.ai.assert('The menu categories are written in French.');
  },
);

// Links on the French page that still point at the English-Canadian site.
// Each entry is a confirmed defect; remove it once Subway fixes the link so
// the test starts guarding against it again.
const KNOWN_LOCALE_LEAKS = [
  '/en-ca/sign-in', // "S'inscrire maintenant" in the rewards banner
];

/**
 * Links on the French-Canadian home page that lead to other Subway pages keep
 * the fr-ca locale instead of switching the visitor to the English site.
 */
test(
  'Links on the French-Canadian home page keep the fr-ca locale',
  { tag: ['@subway-fr-ca-links-keep-locale'] },
  async ({ page }) => {
    const leaks = await page
      .locator('a[href*="/en-ca/"]')
      .evaluateAll((anchors) =>
        anchors
          .filter((a) => a.getClientRects().length > 0)
          .map((a) => new URL((a as HTMLAnchorElement).href).pathname),
      );
    expect([...new Set(leaks)].sort()).toEqual(KNOWN_LOCALE_LEAKS);
  },
);
