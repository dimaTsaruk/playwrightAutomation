const { test, expect } = require('@playwright/test');

test('handle radio buttons', async ({ page }) => {

    await page.goto("");

    //checking radio button is checked
    await page.locator("locator").check();
    // await page.check('locator'); //another option
    await expect(await page.locator('locator')).toBeChecked();
    await expect(await page.locator('locator').isChecked()).toBeTruthy();

    //checking radio button is not checked
    await expect(await page.locator('locator').isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);

})