const { test, expect } = require('@playwright/test')

test('handle inputbox', async ({ page }) => {
    await page.goto('https://itera-qa.azurewebsites.net/home/automation');

    //inputbox 

    await expect(await page.locator("#name")).toBeVisible();
    await expect(await page.locator("#name")).toBeEmpty();
    await expect(await page.locator("#name")).toBeEditable();
    await expect(await page.locator("#name")).toBeEnabled();

    await page.locator("#name").fill("John");
    //  page.fill("#name", 'John');

    await page.waitForTimeout(5000); // pause (similar to sleep(...))


}) 