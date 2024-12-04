// Annontations in PW


/*
test.only() -  Only the test cases marked with .only() will run 

test.skip() -  marks the test as irrelevant. Playwright does not run such a test. Use this annotation when the test is not applicable in some configuration.

test.fail() marks the test as failing. Playwright will run this test and ensure it does indeed fail. If the test does not fail, Playwright will complain.

test.fixme() marks the test as failing. Playwright will not run this test, as opposed to the fail annotation. Use fixme when running the test is slow or crashes.

test.slow() marks the test as slow and triples the test timeout.

test.describe.configure()

*/
const {test, expect} = require('@playwright/test')

test.describe.configure({mode : 'serial', timeout : 100000})


test("only", async ()=>{
    console.log("only annontations");
})

test.skip("skip", async ()=>{
    console.log("skip annontations");
})

test("slow",async ({page})=>{
   // test.slow();
    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator(".form-control").nth(0).fill("test7lYM@gmail.com")
    await page.locator(".form-control").nth(1).fill("Test@123")
    await page.locator("#login").click()
    await expect(page.locator(".sign-out")).toBeVisible()
})

test.fail("fail", async ()=>{
    console.log("fixme annontations");
})

test("slow1", async ()=>{
    console.log("slow1 annontations");
})