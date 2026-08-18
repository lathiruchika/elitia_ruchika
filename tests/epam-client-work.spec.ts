import { test, expect } from '@playwright/test';

test.describe('EPAM client work navigation', () => {
  test('opens Client Work from the Services menu', async ({ page }) => {
    await page.goto('https://www.epam.com/');

    await page.getByRole('button').first().click();
    await page.getByRole('link', { name: 'Services', exact: true }).click();
    await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

    await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
    await page.screenshot({ path: 'artifacts/epam-client-work-after-login.png', fullPage: true });
  });
});
