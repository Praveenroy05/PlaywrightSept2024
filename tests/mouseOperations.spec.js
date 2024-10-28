// click()
// double click()
// right click()
// Mouse Hover on an element
// drag and drop
// pop-up/Alert hanlding

const {test, expect}  = require('@playwright/test')

test("mouse Operation", async ({page})=>{
    // right click, double click
 
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")

    await page.getByText("right click me").click({button : 'right'})
    await page.getByText("Quit").click()
    //double Click - dblClick() - Which performs a double click on an element
    await page.getByText("Double-Click Me To See Alert").dblclick()

    await page.waitForTimeout(3000)


})

// popup or alert - 'dialog' dialog.accept(), dismiss()

test("Handing pop-ups", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")
    await page.locator("#alertButton").click()
    // on('dialog', dialog => dialog.dismiss())

    page.on('dialog', dialog =>{
        console.log(dialog.message())
        dialog.dismiss() // dismiss()
    })
    await page.locator("#confirmButton").click()
    await expect(page.locator("#confirmResult")).toContainText("You selected Cancel")

})

test("Enter the text on pop-up", async ({page})=>{
    const text = "Testing"
    await page.goto("https://demoqa.com/alerts")
    // on('dialog', dialog => dialog.dismiss())

    page.on('dialog', dialog =>{
        console.log(dialog.message())
        dialog.accept(text) 
    })
    await page.locator("#promtButton").click()
    await expect(page.locator("#promptResult")).toContainText(`You entered ${text}`)

})

test("Mouse Hover and Drag and drop", async ({page})=>{
    await page.goto("https://www.spicejet.com/")
    //hover() - It perform a hover over an element
    await page.getByText("SpiceClub").first().hover()
    await expect(page.getByTestId("test-id-Earn Points")).toBeVisible()

    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html")
    // dragTo(locator)
    await page.locator("div#draggable").dragTo(page.locator("div#droppable"))
    await page.waitForTimeout(5000)

    
})
