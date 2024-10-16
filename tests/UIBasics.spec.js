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

test("First Test case using page fixture", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator('#userEmail').fill("testnHNk@gmail.com", {timeout :100*1000})
    await page.locator("//input[@type='password']").fill("Test@123")
    await page.locator("#login").click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()
})

// textContent(), allTextContents(), first(), last(), nth(), selectOption()

// textContent() - To get the text value an element
// allTextContents() - To get the text values from multiple element at a time

// first() - To identify the first matching element from all the matching element
// last() - To identify the last matching element from all the matching element
// nth(index) - index will start from 0. nth(2), nth(3) 


// .form-control - matching 2 different elements

test.only("Get text from elements", async ({page}) =>{

    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator(".form-control").nth(0).fill("testnHNk@gmail.com")
    await page.locator(".form-control").nth(1).fill("Test@123")
    await page.locator("#login").click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()
    const productName = await page.locator(".card-body b").first().textContent()
    console.log(productName) // 

    const productsName = await page.locator(".card-body b").allTextContents()
    console.log(productsName) //[]

})


