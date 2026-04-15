import {test,expect} from '@playwright/test'
test('login to salesforce', async({page})=>{

    //Part 1: Storage State Setup (Salesforce

    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('input[id="password"]').fill('TestLeaf@2025')
    await page.locator('input[id="Login"]').click()
    await page.waitForTimeout(12000)
    await expect(page.locator('//button[@title="App Launcher"]')).toBeVisible()
    await page.locator('//button[@title="App Launcher"]').click()
    console.log('Login is succesful')
    //creating a storage state
    await page.context().storageState({path:'data/annotation.json'})


})