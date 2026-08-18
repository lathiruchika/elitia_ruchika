import { test, expect } from '@playwright/test';

test('navigate from Services to Client Work', async ({ page }) => {
  await page.goto('https://www.epam.com/', {
    waitUntil: 'domcontentloaded',
  });

  const acceptCookies = page.getByRole('button', {
    name: /accept all|accept cookies/i,
  });

  if (await acceptCookies.isVisible().catch(() => false)) {
    await acceptCookies.click();
  }

  await page.getByRole('link', { name: 'Services', exact: true }).click();

  await page
    .getByRole('link', { name: /explore our client work/i })
    .click();

  await expect(
    page.getByRole('heading', { name: 'Client Work', exact: true })
  ).toBeVisible();

  await expect(page).toHaveURL(/\/services\/client-work/);

  await page.screenshot({
    path: 'artifacts/client-work.png',
    fullPage: true,
  });
});
