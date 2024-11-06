const {test, expect} = require('@playwright/test')

// Hooks

// beforeAll()  - This function will run before running any of the test cases
// beforeEach() - Before running each and every test cases (3 test - 3 times)
// afterEach()  - After running each and every test cases (3 test - 3 times)
// afterAll()   - This will run after running all the test cases

test.beforeAll(async ()=>{
    console.log("Before All Hook")
    connectToDB()
})
// npm install mysql.createConnection().excute()
// function  - connectToDB()

test.afterAll(async ()=>{
    console.log("After All Hook")
})

test.beforeEach(async ()=>{
    console.log("Before Each Hook")
})

test.afterEach(async ()=>{
    console.log("After Each Hook")
})


test('one', async () =>{
    await console.log('Test 1')
})

test('Two', async () =>{
    await console.log('Test 2')
})

test('Three', async () =>{
    await console.log('Test 3')
})

