import {test} from "@playwright/test"

test('storage state using salesforce application', async ({page}) => {

await page.goto('https://login.salesforce.com/')
await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
await page.locator('#password').fill('TestLeaf@2025')
await page.click('#Login')
await page.context().storageState({path:'data/salesforce.json'})

})