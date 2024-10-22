const {test, expect} = require('@playwright/test')

// Need to display all the title one by one
// So, we will use a for loop to display all the title

test("Get all the text values from drop down", async ({page})=>{
    // Get all the dropdown elements
    await page.goto("https://demoqa.com/select-menu")
    const dropdown = page.locator("#selectOne")
    await dropdown.click()
    await page.locator(".css-26l3qy-menu").isVisible()
    const count = await page.locator("[class*='option']").count()
    for (let i = 0; i < count; i++) {
        const option = await page.locator("[class*='option']").nth(i).textContent()
        console.log(option)
    }
})
