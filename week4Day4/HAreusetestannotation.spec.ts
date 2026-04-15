import{test,expect} from '@playwright/test'

test.use({
    storageState:'data/annotation.json'
})

test('skip the login using storageState', async({page}) => {

await page.goto('https://testleaf.lightning.force.com/lightning/page/home')
await page.waitForTimeout(12000)
await expect(page.locator('//button[@title="App Launcher"]')).toBeVisible()
await page.locator('//button[@title="App Launcher"]').click()
console.log('Login is succesful')

})



test('login and verify',async({page})=>{
    //step 1 login to url
   await page.goto('https://login.salesforce.com/?locale=in')
   await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
   await page.locator('input[id="password"]').fill('TestLeaf@2025')
   await page.locator('input[id="Login"]').click()
   await page.waitForTimeout(12000)
   await expect(page.locator('//button[@title="App Launcher"]')).toBeVisible()
   await page.locator('//button[@title="App Launcher"]').click()
   console.log('Login is succesful')


})


test('Navigate to login page',async({page})=>{
test.slow()
   await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('input[id="password"]').fill('TestLeaf@2025')
    await page.locator('input[id="Login"]').click()
})

test.fail('Invalid session',async({page})=>{
 //url wrong
   await page.goto('https://login.salesforce.com/?locle=in')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('input[id="password"]').fill('TestLeaf@2025')
    await page.locator('input[id="Login"]').click()

})

