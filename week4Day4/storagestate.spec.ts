import {test} from "@playwright/test"
test('staorage state', async({page}) => {


await page.goto('https://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill('demosalesmanager')
await page.locator('#password').fill('crmsfa')
await page.locator('.decorativeSubmit').click()
await page.locator('//a[contains(text(),"CRM")]').click()


await page.context().storageState({path:'data/leaftap.json'})
    
})