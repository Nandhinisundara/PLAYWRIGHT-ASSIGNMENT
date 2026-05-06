import {test} from "@playwright/test"

test('storage state using salesforce application', async ({page}) => {

await page.goto('https://login.salesforce.com/')
await page.locator('#username').fill('nandhinivenugopal2023.00500069644e@agentforce.com')
await page.locator('#password').fill('Nandhini@25')
await page.click('#Login')
await page.waitForTimeout(60000)
await page.context().storageState({path:'data/Apisalesforce.json'})

})