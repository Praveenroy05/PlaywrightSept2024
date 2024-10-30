const {test, expect}  = require('@playwright/test')


// 1. Full page screenshot
// 2. Specific element screenshot
// 1. Full page screenshot

test("Full page screenshot", async ({page})=>{
    await page.goto("https://books-pwakit.appspot.com/explore?q=")
    await page.locator("#input").fill("Testing")
    await page.waitForTimeout(5000)
    // screenshot("path to store the file")
    await page.screenshot({path: "FullPageScreenshot.png"})
    await page.locator("#input").screenshot({path: "PartialScreenshot.jpeg"})


})
