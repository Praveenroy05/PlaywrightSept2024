const {test, expect} = require('@playwright/test')

const {LoginPage} = require('../pageObjects/LoginPage')


const url = "https://rahulshettyacademy.com/client"
const username = "test7lYM@gmail.com"
const password = "Test@123"
const incorrectPassword = "Test@12"


let loginPage

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
})


test("Login Test with valid credentials", async ()=>{
    await loginPage.validLogin(username, password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("Login Test with invalid credentials", async ()=>{
    await loginPage.invalidLogin(username, incorrectPassword)
    await expect(loginPage.errorMessage).toContainText("Incorrect email or password.")
})