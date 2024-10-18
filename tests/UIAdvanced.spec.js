const {test, expect} = require('@playwright/test')

test("Handling child window", async ({browser})=>{
    const context = await browser.newContext()
    const page =  await context.newPage()
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    const documentLink = page.locator("[target='_blank']")

    // const [newPage] = await Promise.all([
    //     context.waitForEvent('page'),
    //     documentLink.click()
    // ])
     // -fire a page event
     // return us a new page handle


    await page.locator("[target='_blank']").click()
    const newPage = await context.waitForEvent('page')
    

    await expect(newPage.locator(".inner-box h1")).toContainText("Documents request")
    await page.locator("#username").fill("Testing in progress")
})