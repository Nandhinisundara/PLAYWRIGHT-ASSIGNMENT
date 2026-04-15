import {test} from '@playwright/test'

test('Storage state',async({browser})=>{
    //we are creating a new browser context
    const context=await browser.newContext()
    const page=await context.newPage()

await page.goto('https://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill('demosalesmanager')
await page.locator('#password').fill('crmsfa')
await page.locator('.decorativeSubmit').click()
await page.locator('//a[contains(text(),"CRM")]').click()
//creating a storage here
await page.context().storageState({path:'data/leafwebsites.json'})

})
