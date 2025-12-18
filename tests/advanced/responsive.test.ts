import { test, expect } from 'donobu';
import { z } from 'zod/v4';

test('Responsive(iPhone 14) UI check for donobu.com', async ({ page }) => {
    await page.goto('https://donobu.com');
    await page.waitForLoadState('domcontentloaded');

    const uiReportResponse = await page.ai(
        `Scan the page for any responsiveness issues (overlap, misalignment, broken layout, clipping, bad spacing, resizing problems, or horizontal scroll). 
        Return PASS only if everything looks correct.`,
        {
            schema: z.object({
                status: z.enum(['PASS', 'FAIL']),
                issues: z.array(z.string()),
            }),
            maxToolCalls: 50,
            allowedTools: ['scroll',
                'runAccessibilityTest'
            ]
        }
    );
    await page.ai.assert(`Assert that the page is responsive and does not have any responsiveness issues 
        eg.overlap, misalignment, broken layout, clipping, bad spacing, resizing problems, or horizontal scroll.`);

    expect(uiReportResponse.status, uiReportResponse.issues.join('\n')).toBe('PASS');
});
