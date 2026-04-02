import {test,expect} from "@playwright/test"

test('Handling Salesforce',async({page})=>{
    //login to saleforce
    await page.goto('https://login.salesforce.com')
    //enter username
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    //enter password
    await page.locator('#password').fill('TestLeaf@2025')
    //click the login button
    await page.locator('input[type="submit"]').click()
    //click on toggle button
    await page.locator('.slds-icon-waffle').click()
    //click view all here for unique we taken this button is the tag name that is click action alone 
    //this new one
    await page.locator('//button[@aria-label="View All Applications"]').click()
    //click individual
    await page.locator('//a[@data-label="Individuals"]').click()
     //search the last name 
    await page.locator('//input[@placeholder="Search this list..."]').fill('shan')

    await page.keyboard.press('Enter')
    await page.waitForTimeout(3000) 
    //click the last name locator
    await page.locator('//a[@title="shan"]').click()
     //click edit
    await page.locator('//a[@title="Edit"]').click()
    await page.locator('//a[@class="select"]').nth(0).click()
    await page.locator('//a[@title="Mr."]').click()
    await page.locator('//input[@placeholder="First Name"]').fill("devi")
    //click save
    await page.getByRole('button', {name:'Save', exact:true}).click()
    await page.waitForTimeout(3000) // extra wait for content to load
    const fullName = await page.locator('//span[@class="uiOutputText"]').first().textContent()
    console.log('Full name is:', fullName) // prints "Mr. devi shan"
    expect(fullName).toContain('devi') // ✅ passes!
    console.log('First name devi verified successfully')
    
})  