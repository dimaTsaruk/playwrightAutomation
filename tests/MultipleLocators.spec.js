import { test, expect } from '@playwright/test'

test('Multiple Locators', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    /*const links = await page.$$('a');

    for (const link of links) {

        const linkText = await link.textContent(); //return link text
        console.log(linkText);
    }
        */


    console.log("Printing product names:");
   await page.waitForSelector("#tbodyid h4 a");
    const products = await page.$$('#tbodyid h4 a');

    for (const product of products) {
        const prodName = await product.textContent();
        console.log(prodName);
    }

})