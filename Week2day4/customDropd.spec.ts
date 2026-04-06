

import {test} from "@playwright/test"

test('create lead using salesforce application', async ({page}) => {

await page.goto('https://login.salesforce.com/')
await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
await page.locator('#password').fill('TestLeaf@2025')
await page.click('#Login')
await page.click('//span[text()="Leads"]')
await page.click('//div[@title="New"]')
await page.locator('//button[@name="salutation"]').click()
//here for dropdown option we find the perfect locator we are settinga timeout to freeze
//in console type this  setTimeout(()=>{debugger},4000)
await page.locator('//span[text()="Mrs."]').click()
    
})