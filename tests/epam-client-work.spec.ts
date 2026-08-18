import { test, expect } from '@playwright/test';

test.describe('EPAM client work navigation', () => {
  test('navigates from Services to Explore Our Client Work and verifies Client Work page', async ({ page }) => {
    await page.goto('https://www.epam.com/');

    await page
      .getByRole('navigation', { name: 'Main navigation' })
      .getByRole('link', { name: 'Services' })
      .click();

    await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

    await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();

    await page.screenshot({
      path: 'test-results/epam-client-work-page.png',
      fullPage: true,
    });
  });
});
