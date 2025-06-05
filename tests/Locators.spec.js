// const {test, expect}=require('@playwright/test');
import { test, expect } from '@playwright/test'

test('Locators', async ({ page }) => {

    await page.goto("https://www.demoblaze.com/index.html");

    //click on login button - using property as locator
    // await page.locator('id=login2').click();

    await page.click('id=login2');

    //providing user name - css
    await page.locator('#loginusername').fill('pavanol');
    //await page.fill('#loginusername', 'pavanol')
    //await.type('')

    //providing password - css
    await page.locator('input[id=loginpassword]').fill('test@123');
    //await page.fill('input[id=loginpassword]', 'test@123');

    //click on login
    await page.click("//button[normalize-space()='Log in']");

    //verify logout link presence 
    const logoutLink = await page.locator("//a[normalize-space()='Log out']");

    await expect(logoutLink).toBeVisible();

    await page.close();







})

