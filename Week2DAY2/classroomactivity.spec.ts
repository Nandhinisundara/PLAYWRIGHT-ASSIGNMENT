import {test} from '@playwright/test'
test('login to salesforce', async({page})=>{

    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('input[id="password"]').fill('TestLeaf@2025')
    await page.locator('input[id="Login"]').click()
    await page.waitForTimeout(12000)
    await page.locator('[title="App Launcher"]').click

})