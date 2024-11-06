const {test, expect} = require('@playwright/test')

const productName = "IPHONE 13 PRO"
const countryName = " Indonesia"

test("Validate order of the product", async ({page})=>{
    const login = new LoginPage(page)
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

   // await expect(page.locator("#toast-container")).toBeVisible()
    await expect(page.locator("#toast-container")).toContainText("Product Added To Cart")
    await page.locator("//button[@routerlink='/dashboard/cart']").click()
    await expect(page.locator("//*[text()='My Cart']")).toBeVisible()
    await page.locator("//*[text()='Checkout']").click()
    await page.getByPlaceholder("Select Country").pressSequentially("ind")
    const dropdownvalues = page.locator(".ta-results button")
    await dropdownvalues.first().waitFor()
    const countOfDropDownValues = await dropdownvalues.count()
    for(let i=0; i<countOfDropDownValues; i++){
        const textValue = await dropdownvalues.nth(i).textContent()
        if(textValue === countryName){
            await dropdownvalues.nth(i).click()
            break;
        }
    }

    await page.locator(".action__submit").click()
    await expect(page.locator(".hero-primary")).toContainText("Thankyou for the order")
    const orderID = await page.locator("td.em-spacer-1 label").last().textContent()
    console.log(orderID) // 
    await page.locator("[routerlink='/dashboard/myorders']").first().click()
    await page.locator("table tbody").waitFor({state:'visible'})
    const rows =  page.locator("tbody tr") // 100
    const rowsCount = await rows.count() // 8
    for(let i=0; i<rowsCount; i++){
        const orderIDText = await rows.nth(i).locator("th").textContent()
        if(orderID.includes(orderIDText)){
            await rows.nth(i).locator("button").first().click()
            break;
        }
    }

    const orderSummaryOrderID = await page.locator(".col-text").first().textContent()
    console.log(orderSummaryOrderID)
    // | 67191ba2ae2afd4c0ba63c67 |.includes(67191ba2ae2afd4c0ba63c67)

    await expect(orderID.includes(orderSummaryOrderID)).toBeTruthy()
 // await expect(true).toBeTruthy()



    

})
