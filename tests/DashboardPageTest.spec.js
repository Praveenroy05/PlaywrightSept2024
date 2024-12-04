const {test, expect} = require('@playwright/test')

const {LoginPage} = require('../pageObjects/LoginPage')
const { DashboardPage } = require('../pageObjects/DashboardPage')

const productName = "ADIDAS ORIGINAL"
const url = "https://rahulshettyacademy.com/client"
const username = "test7lYM@gmail.com"
const password = "Test@123"

let loginPage
let dashboardPage

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
    await loginPage.validLogin(username, password)
})

test('Validate add to cart', {tag : ['@smoke', '@regression']}, async ()=>{
    await dashboardPage.searchProductAndAddToCart(productName)
    await expect(dashboardPage.addToCartSuccessMessage).toHaveText("Product Added To Cart")
})

test('View Product Details', {tag : ['@smoke', '@regression']},async ()=>{
    await dashboardPage.searchProductAndViewDetails(productName)
    await expect(dashboardPage.viewPageProductName).toHaveText(productName)
})