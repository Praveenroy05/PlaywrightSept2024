const {test, expect, request} = require('@playwright/test')

const productName = "IPHONE 13 PRO"
const countryName = " Indonesia"

const loginPayload = {userEmail: "test7lYM@gmail.com", userPassword: "Test@123"}

const orderPayload = {orders: [{country: "Australia", productOrderedId: "6581ca979fd99c85e8ee7faf"}]}

// Web automation 
// 1. Browser Context - browser
// hooks

let token
let orderID
test.beforeAll('Get the token', async ()=>{
    const apiContext = await request.newContext()
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
        data : loginPayload
    })
   // console.log(await loginResponse.json())
   const loginResponseJson = await loginResponse.json()
   token = await loginResponseJson.token
   console.log(token)

   const orderresponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
    data : orderPayload,
    headers : {
        "authorization" : token
    }
})
const orderResponseJson = await orderresponse.json()
orderID = await orderResponseJson.orders[0] // orders = ["6728f875ae2afd4c0bb27bbc", ],

})


// token - 

test("Validate order of the product", async ({page})=>{

    await page.addInitScript((value)=>{
        window.localStorage.setItem('token', value)
    }, token)

    await page.goto("https://rahulshettyacademy.com/client")
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



