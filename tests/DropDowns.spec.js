const { test, expect } = require('@playwright/test')

test("Handle dropdowns", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Multiple ways to select option from the DD:

    //1) select by option text
    // await page.locator("#country").selectOption({label:'India'}) 
    //OR by visible text:
    // await page.locator("#country").selectOption("India");

    //2) select by value attribute
    // await page.locator("#country").selectOption({ value: 'uk' });

    //3) by index
    // await page.locator("#country").selectOption({ index: '1'});

    //  await page.selectOption("#country", 'India'); //by text

    //Assertions
    //1) check number of options in dropdown - Approach1
    //const options = await page.locator('#country option');
    //  await expect(options).toHaveCount(10);

    //2) check number of options in dropdown - Approach2
    // const options = await page.$$('#country option'); // returns options in array format
    // //console.log("Number of options:", options.length);
    // await expect(options.length).toBe(10);

    //3) check presence of value in the dropdown - Approach1
    // const content = await page.locator('#country').textContent() // return text content of locator (dropdown) all cournties as string
    // await expect(content.includes('India')).toBeTruthy();

    //4) check presence of value in the dropdown - Approach2 - using looping 
    const options = await page.$$("#country option");
    let status = false;

    for (const option of options) {
        // console.log(await option.textContent());
        let value = await option.textContent();
        if (value.includes('France')) 
        {
            status = true;
            break;
        }
    }
    expect(status).toBeTruthy();




})