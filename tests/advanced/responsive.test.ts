import { test } from 'donobu';

test('Responsive(iPhone 14) UI check for donobu.com', async ({ page }) => {
    await page.goto('https://donobu.com');
    await page.waitForLoadState('domcontentloaded');
    await page.ai.assert(`Assert that the page UI does not have:
        - overlaping elements
        - misalignment
        - broken layout
        - clipping
        - bad spacing`);
});
