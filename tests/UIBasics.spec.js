// import the test and expect functions from Playwright/test module
// test function is helpful in writing the test cases
// expect function is helpful in writing the assertion

const {test, expect} = require('@playwright/test')
//import {test, expect} from '@playwright/test';

// browser, page
test("First Test Case", async function({browser}){

    const context = await browser.newContext() // It will initialise the browser context or instance
    const page = await context.newPage() // Creates a new page in the browser context.
    // goto() - Which is use to launch the url
    await page.goto("https://google.com")

    context.close()


    // browser - Fixture
    // page - Fixture
    // Launch the url
    // fill the username and fill the password
     // click on the login button
     // Validate of the login is successful


})

// goto() - Which is use to launch the url

// locator(), fill(), click(), toBeVisible()

test.only("First Test case using page fixture", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator('#userEmail').fill("testnHNk@gmail.com", {timeout :100*1000})
    await page.locator("//input[@type='password']").fill("Test@123")
    await page.locator("#login").click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()
})

