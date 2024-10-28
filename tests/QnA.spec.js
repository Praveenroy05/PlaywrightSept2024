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

test("Basic Auth", async({page})=>{
    const user = 'admin'
    const password = 'admin'
    const auth = 'Basic ' + btoa(user + ":" +password)
    await page.setExtraHTTPHeaders({Authorization : auth})
    await page.goto("https://the-internet.herokuapp.com/basic_auth")
    await expect(page.locator(".example p")).toContainText("Congratulations! You must have the proper credentials.", {timeout:20000})

})

test("Popup validation", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")

    page.on('dialog', async dialog =>{
        const message = (dialog.message())
        console.log(message)
        await dialog.dismiss();
    })
    await page.locator("#alertButton").click()
    await page.locator("#timerAlertButton").click()
    await page.waitForTimeout(5000)

    await page.locator("#confirmButton").click()
    await expect(page.locator("#confirmResult")).toContainText("You selected Cancel")

})

test("Popup Fill validation", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")
    const text = "This is Fill Pop-up"
    page.on('dialog', async dialog =>{
        const message = (dialog.message())
        console.log(message)
        await dialog.accept(text);
    })
    await page.locator("#promtButton").click()
   
    await expect(page.locator("#promptResult")).toContainText(text)

})

const cityname = "Chennai"
const mydate = '05'

test("first e2e", async({page})=>{
    await page.goto("https://www.makemytrip.com/hotels/")
   // await page.waitForTimeout(2000)
    await page.locator(".commonModal__close").click()
   // await page.getByRole("button", {name:'Accept'}).click()
    //await page.waitForTimeout(20000)
    await page.getByText("City, Property name or Location").click()
    //await page.waitForTimeout(3000)
  //  await page.locator("section span").first().click()
    //await page.waitForTimeout(2000)
    await page.getByPlaceholder("Where do you want to stay?").pressSequentially("ch")
    //await page.waitForTimeout(2000)
    const dropdownvalues = await page.locator("#react-autowhatever-1 li")
    await dropdownvalues.first().waitFor({state:'visible'})
    const countvalues = await dropdownvalues.count()
     for(let i=0; i<countvalues; i++){
     const textValue = await dropdownvalues.nth(i).textContent()
     console.log(textValue)
     if(textValue.includes(cityname)){
        await dropdownvalues.nth(i).click()
        break;
  
     }
     await page.waitForTimeout(5000)

}


// await page.locator("#guest").click()
// await page.waitForTimeout(2000)
// await page.getByTestId("gstSlctCont").click()
// await page.waitForTimeout(3000)
// const dropdates = await page.getByTestId("adult_count")
// console.log(dropdates)
// const datecounts = await dropdates.count()
// for(let i=0; i<datecounts; i++){
// const value1 = await dropdates.nth(i).textContent()
// if(value1 === mydate){
//    await dropdates.nth(i).click()
//    break;


})



