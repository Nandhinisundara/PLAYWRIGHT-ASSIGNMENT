import {test} from "@playwright/test"

test.use({
    storageState:'data/salesforce.json'
})
test('skip the login using storageState', async({page}) => {

await page.goto('https://testleaf.lightning.force.com/lightning/page/home')
await page.locator('.slds-icon-waffle').click()
await page.locator('//button[@aria-label="View All Applications"]')
await page.waitForTimeout(3000)

})
