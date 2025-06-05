const { test, expect } = require('@playwright/test')

test('AssertionsTest', async ({ page }) => {

    //open app url 
    await page.goto('https://dou.ua/')

    //expect(page).toHaveURL()
    await expect(page).toHaveURL('https://dou.ua/')

    await expect(page).toHaveTitle('Спільнота програмістів | DOU')

    const logoElem = await page.locator("a[aria-label=' DOU Logo']");
    await expect(logoElem).toBeVisible();

    /*
    1) expect(page).toHaveURL() 
    2) expect(page).toHaveTitle()
    3) expect(locator).toBeVisible()
    4)  expect(locator).toBeEnabled()
        expect(locator).toBeDisabled()
    5) expect(locator).toBeChecked() - radio boxes
    6) expect(locator).toHaveAttribute()
    7) expect(locator).toHaveText() - exact
    8) expect(locator).toContainText() - contains
    9) expect(locator).toHaveValue(value) - input has a value
    10) expect(locator).toHaveCount()  - list of elements has given length
        expect(locator).not.toHaveCount() - not to have count

    */




})