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

// textContent(), allTextContents(), first(), last(), nth()

// textContent() - To get the text value an element
// allTextContents() - To get the text values from multiple element at a time

// first() - To identify the first matching element from all the matching element
// last() - To identify the last matching element from all the matching element
// nth(index) - index will start from 0. nth(2), nth(3) 


// .form-control - matching 2 different elements

test("Get text from elements", async ({page}) =>{

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

// Handling Radio button, checkbox, drop downs

// check()/click() - click on radio button and checbox

// drop down
// 2 Types of drop down

// 1. static
// 2. Dynamic - 

/*
1. <select> - If developed using select tag use selectOption()
2. <div> -
// If developed using non select tag use this:
//First click on the drop down
// Then select the option from the drop down by clicking on the values

*/

test.only('Radio button, checkbox and drop down built using select tag validation', async({page}) =>{
    // https://practice.expandtesting.com/dropdown
    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    await page.locator("#exampleCheck1").check()
    await expect(page.locator("#exampleCheck1")).toBeChecked()
    await page.locator("#inlineRadio1").check()
    await expect(page.locator("#inlineRadio1")).toBeChecked()

// selectOption()
   await page.locator("select#exampleFormControlSelect1").selectOption("Female")

   await page.waitForTimeout(2000)

   await page.goto("https://practice.expandtesting.com/dropdown")
   await page.locator("#country").selectOption("AL")
   await page.waitForTimeout(2000)
   await page.locator("#country").selectOption({label : "Cameroon"})
   await page.waitForTimeout(2000)
   await page.locator("#country").selectOption({index : 10})
   await page.waitForTimeout(2000)

})

test.only("Drop Down built using div tag", async ({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    await page.locator(".css-1hwfws3").first().click()
    await page.locator("#react-select-2-option-1-0").click()
    await page.waitForTimeout(2000)
    await page.locator(".css-1hwfws3").last().click()
    await page.locator("#react-select-4-option-0").click()
    await page.locator("#react-select-4-option-1").click()
    await page.waitForTimeout(2000)
    await page.selectOption("#cars", ['volvo', 'Opel', 'Audi'])
    await page.waitForTimeout(2000)

})



