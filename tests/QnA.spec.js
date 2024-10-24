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

test("Student Registration Form", {tag: '@regression'}, async ({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.locator("#firstName").fill("Test")
    await page.locator("#lastName").fill("Testing")
    await page.locator("#userEmail").fill("test@testing.com")    
    await page.locator("[for='gender-radio-2']").setChecked(true)
    await page.locator("#userNumber").pressSequentially("1234567890")
    await page.locator(".subjects-auto-complete__value-container").click()
    await page.locator(".subjects-auto-complete__value-container").pressSequentially("M")
    await page.locator("#react-select-2-option-2").click()
    await page.locator("[for='hobbies-checkbox-2']").check()
    await page.locator("#currentAddress").fill("Hyderabad")
    await page.getByText("Select State").click()
    await page.locator("#react-select-3-option-0").click()
    await page.getByText("Select City").click()
    await page.locator("#react-select-4-option-0").click()
    await page.locator("#submit").click()

    await expect(page.locator("#example-modal-sizes-title-lg")).toContainText("Thanks for submitting the form")
 
})


test('Logo validation on the homepage', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  const logo = await page.locator('.logoClass'); 

  // Verify that the logo is visible on the page
  await expect(logo).toBeVisible();

  // Verify the logo's src attribute
  const logoSrc = await logo.getAttribute('src');
  expect(logoSrc).toBe('images/rs_logo.png'); 
  expect(logo).toHaveAttribute('src','images/rs_logo.png')

  // Optionally, check the logo dimensions
  const width = await logo.boundingBox()
  expect(width.width).toBeGreaterThan(50);  
});

