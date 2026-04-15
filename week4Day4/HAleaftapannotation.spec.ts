
import {test,expect} from '@playwright/test'

test('leaftap Annotation',async({page})=>{

await page.goto('https://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill('demosalesmanager')
await page.locator('#password').fill('crmsfa')
await page.locator('.decorativeSubmit').click()
await page.locator('//a[contains(text(),"CRM")]').click()
//nerify the home page
await expect(page.locator('//a[text()="My Home"]')).toBeVisible()
console.log('Home page is visible')

})


//Invalid login → test.fail()

test.fail('Invalid login',async({page})=>{

await page.goto('https://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill('demosalesmanager')
await page.locator('#password').fill('crmsfa')
await page.locator('.decorativeSubmit').click()
await page.locator('//a[contains(text(),"CRM")]').click()

})

//Incomplete flow
test.fixme('Incomplete flow',async({page})=>{

await page.goto('https://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill('demosalesmanage')
await page.locator('#password').fill('crmsfa')
await page.locator('.decorativeSubmit').click()
await page.locator('//a[contains(text(),"CRM")]').click()

})

// Optional

test.skip('skip the test',async({page})=>{

await page.goto('https://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill('demosalesmanage')
await page.locator('#password').fill('crmsfa')
await page.locator('.decorativeSubmit').click()
await page.locator('//a[contains(text(),"CRM")]').click()

})
