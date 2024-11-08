const {test, expect} = require('@playwright/test')

const {LoginPage} = require('../pageObjects/LoginPage')
const { DashboardPage } = require('../pageObjects/DashboardPage')

// const productName = "ADIDAS ORIGINAL"
// const url = "https://rahulshettyacademy.com/client"
// const username = "test7lYM@gmail.com"
// const password = "Test@123"

const data = require('../utils/loginData.json')

let loginPage
let dashboardPage

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(data.URL)
    await loginPage.validLogin(data.username, data.password)
})

test('Validate add to cart', async ()=>{
    await dashboardPage.searchProductAndAddToCart(data.productName)
    await expect(dashboardPage.addToCartSuccessMessage).toHaveText("Product Added To Cart")
})

test('View Product Details', async ()=>{
    await dashboardPage.searchProductAndViewDetails(data.productName)
    await expect(dashboardPage.viewPageProductName).toHaveText(data.productName)
})