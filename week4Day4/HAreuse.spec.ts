import{test,expect} from '@playwright/test'

test.use({
    storageState:'data/leafwebsite.json'
})

test('Reuse the storage state',async({page})=>{

    //using the url after logged in so it will skip the login
    await page.goto('https://leaftaps.com/crmsfa/control/main?externalLoginKey=EL793000332368')
    
    //verify its loggedin 
    await expect(page.locator('//a[text()="Leads"]')).toBeVisible()
    console.log('logged in without login steps')
    await page.locator('//a[text()="Leads"]').click()
})