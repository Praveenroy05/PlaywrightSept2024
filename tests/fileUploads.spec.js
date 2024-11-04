const {test, expect} = require('@playwright/test')

test('Single File upload', async ({page})=>{
    await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html")

    // C:\Users\prave\OneDrive\Documents\Praveen-PW\PWSeptisha2024\tests\Cypress.txt

    //setInputFiles(path of the file(s)) - It helps us in uploading
    await page.locator("[name='upfile']").setInputFiles("C:/Users/prave/OneDrive/Documents/Praveen-PW/PWSeptisha2024/tests/Cypress.txt")
    await page.locator("[type='submit']").click()
    await expect(page.locator("//h1[text()='File Upload Results']/following-sibling::pre")).toBeVisible()
await page.waitForTimeout(5000)
})

test('Multiple Files upload', async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    //setInputFiles([path of the file(s), path of file]) - It helps us in uploading
    await page.locator("#filesToUpload").setInputFiles([
        "C:\\Users\\prave\\OneDrive\\Documents\\Praveen-PW\\PWSeptisha2024\\tests\\Cypress.txt",
        "C:\\Users\\prave\\OneDrive\\Desktop\\Notepad\\Data Driven.txt"   
    ])
    await expect(page.locator("#fileList li").first()).toContainText("Cypress.txt")
    await expect(page.locator("#fileList li").last()).toContainText("Data Driven.txt")

})