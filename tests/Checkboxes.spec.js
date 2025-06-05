
const { test, expect } = require('@playwright/test');

test("Handle checkboxes", async ({ page }) => {

    await page.goto("https://demoqa.com/checkbox");

    /*
    //single check
    await page.locator("[id='tree-node-home']+span>svg").check();
    //await page.check('locator');

    await expect(await page.locator("[id='tree-node-home']+span>svg")).toBeChecked();
    await expect(await page.locator("[id='tree-node-home']+span>svg").isChecked()).toBeTruthy();

    // await page.waitForTimeout(5000);

    */

    //Multiple checkboxes

    await page.locator("[title=Toggle]").click();

    const checkboxLocators = [
        "[id='tree-node-desktop']+span>svg",
        "[id='tree-node-documents']+span>svg",
        "[id='tree-node-downloads']+span>svg"
    ]

    for (const locator of checkboxLocators) { //select multiple checkboxes

        await page.locator(locator).check();

    }

    await page.waitForTimeout(3000);

    for (const locator of checkboxLocators) { //unselect multiple selected checkboxes

        if (await page.locator(locator).isChecked) {
            await page.locator(locator).uncheck()
        }

    }

    await page.waitForTimeout(3000);





})