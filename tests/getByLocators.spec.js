// Playwright special methods for locators

// GetBy Locators in Playwright

/*

These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.

page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

await page.getByRole('button', { name: /submit/i }).click();

await page.getByRole('button', { name: 'Submit' }).click();

*/

const {test, expect} = require('@playwright/test')

test("Playwright Special locator methods", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    await page.getByLabel('Password').fill("Testing for label")
    await page.getByLabel("Check me out if you Love IceCreams!").check()
    await expect(page.getByLabel("Check me out if you Love IceCreams!")).toBeChecked()
    await page.getByLabel("Employed").click()
    await page.getByRole('button', {name:'Submit'}).click()
    await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible()
    await page.waitForTimeout(5000)

    await page.goto("https://rahulshettyacademy.com/client")
    await page.getByPlaceholder("email@example.com").fill("Testing")
    await page.getByPlaceholder("enter your passsword").fill("Password")
    await page.waitForTimeout(5000)

})





