import {test, expect} from '@playwright/test';

test("Verify page title", async ({ page }) => {
  await page.goto("https://www.automationpratice.com.br/");

  let title:string = await page.title();
  console.log(title);

  await expect(page).toHaveTitle("QAZANDO Shop E-Commerce");
});
