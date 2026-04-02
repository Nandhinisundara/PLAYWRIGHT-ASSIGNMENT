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
    await page.locator('//div[@title="New"]').click()
    
    //enter lat name
    await page.locator('//input[@placeholder="Last Name"]').fill('Nandhu')
    //click on save button
    await page.locator('//span[text()="Save"]').click()

    //to verify individual name
    const Individualname=await page.locator('//span[@class="uiOutputText"][1]').textContent()
    //venu taken from that textcontent that stored in individual
    expect(Individualname).toContain('Nandhu');
    console.log('Individual name Nandhu is verified succesfully')

})