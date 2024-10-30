const {test, expect}  = require('@playwright/test')

test("Shadom dom handling", async ({page})=>{
    await page.goto("https://books-pwakit.appspot.com/")
    await page.locator("#input").fill("Testing")
    await page.locator("div.icon").click()
    await expect(page.locator("h2.title").first()).toBeVisible()
    await page.waitForTimeout(3000)

})