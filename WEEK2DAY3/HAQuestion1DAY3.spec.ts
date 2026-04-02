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
    await page.locator('//button[@aria-label="View All Applications"]')
    //click sales 
    await page.locator('//p[text()="Sales"]').click()
    //click on leads 
    await page.locator('//a[@title="Leads"]').click()
    //click on new inside lead 
    await page.locator('//div[@title="New"]').click()
    //click on salunation and select mr
    await page.locator('//button[@name="salutation"]').click()
    //click inside the salunation button as mr
    await page.locator('//span[text()="Mr."]').click()
    //enter the last name
    await page.locator('//input[@name="lastName"]').fill("Sundar")
    //enter the company name
    await page.locator('//input[@name="Company"]').fill("Testleaf")
    //save 
    await page.locator('//button[@name="SaveEdit"]').click()
    //to verify the saved leadname click lead button
    
    //latest one
    await page.locator('//lightning-formatted-name[@slot="primaryField"]').click()
    //directly move to lead name created page
    const leadName=await page.locator('//lightning-formatted-name[@slot="primaryField"]').textContent()
    expect(leadName).toContain('Sundar');
    console.log('verified succesfully')

})