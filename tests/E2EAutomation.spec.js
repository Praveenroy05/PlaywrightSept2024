const {test, expect} = require('@playwright/test')

const productName = "IPHONE 13 PRO"

test("Validate order of the product", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator(".form-control").nth(0).fill("test7lYM@gmail.com")
    await page.locator(".form-control").nth(1).fill("Test@123")
    await page.locator("#login").click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()
    const products = page.locator("div.card-body") //
    const productNames = await products.locator("b").allTextContents() // div.card-body b
    await console.log(productNames)
    // count() - It is use to provide the count of matching element for the locators

    const countOfProducts = await products.count() // 4
    await expect(countOfProducts).toBeGreaterThan(0)

    for(let i=0; i<countOfProducts; i++){ // 0 <4 ... 0 1 2 3 // 0++ = 0+1
        const productText = await products.nth(i).locator("b").textContent()
        if(productText === productName) {
            await products.nth(i).locator("button .fa-shopping-cart").click() //div.card-body button .fa-shopping-cart
            break;
        }
        
    }

    await page.waitForTimeout(5000)






})
