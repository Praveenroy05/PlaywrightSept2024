// https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame

const {test, expect} = require('@playwright/test')

test("Handling frames", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator("[value='radio1']").click()
    //frameLocator() - It use to identify the locators for frames
    const framePage = await page.frameLocator("#courses-iframe")
    await framePage.getByText("All Access plan").first().click()
    await expect(framePage.locator(".inner-box").first()).toContainText("All Access Subscription")
    await page.getByText("Home").first().click()
    await page.waitForTimeout(5000)

})
