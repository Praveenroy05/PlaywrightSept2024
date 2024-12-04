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

test.describe("Login page", async ()=>{
test("Login Test with valid credentials", {tag : ['@smoke', '@regression']}, async ()=>{
    await loginPage.validLogin(username, password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("Login Test with invalid credentials", {tag : ['@smoke', '@regression']},async ()=>{
    await loginPage.invalidLogin(username, incorrectPassword)
    await expect(loginPage.errorMessage).toContainText("Incorrect email or password.")
})
})

// Tags
// Test Runneer Script - 


// Jenkins
// BDD cucumber framework
// Hidden element
// codegen






// Delete the previous history from the allure report
// rm -rf allure-results/* & npx playwright test tests/LoginPageTest.spec.js

// del /q /f allure-results\\* & npx playwright test tests/LoginPageTest.spec.js

// To run in Terminal : Remove-Item -Path allure-results\* -Force -Recurse;  npx playwright test tests/LoginPageTest.spec.js 