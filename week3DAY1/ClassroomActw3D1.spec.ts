//Classroom 1: Write the typescript code to login to Salesforce application using Advanced Xpaths.
//URL : https://login.salesforce.com/
//Username: dilipkumar.rajendran@testleaf.com
//Password: TestLeaf@2025

import {test} from '@playwright/test';
test('learn playwright locators', async({page})=>{

    await page.goto('https://login.salesforce.com/')
    await page.locator('//div[@id="username_container"]/input[1]').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('//label[text()="Password"]/following-sibling::input').fill('TestLeaf@2025')
    await page.locator('//label[text()="Password"]/following::input[@type="submit"]')
    await page.waitForTimeout(5000)


})