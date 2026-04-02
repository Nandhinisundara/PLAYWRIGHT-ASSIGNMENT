import {test} from "@playwright/test"

test('Handling dropdown in leaftap',async({page})=>{
    await page.goto('http://leaftaps.com/opentaps/control/main') //go to link
    await page.locator('//input[@id="username"]').fill('demosalesmanager')//once yout touch username highlight so in input tage make unique ide
    await page.locator('//input[@id="password"]').fill('crmsfa')//same take 1 of 1 match for password
    await page.click('//input[@class="decorativeSubmit"]')//using decoraticesubmit in class for login
    await page.click('//a[contains(text(),"CRM")]')//using partial text based xpath in normal text no  1of 1 match
    await page.click('//a[text()="Leads"]')// in test xpath unique match found
    await page.click('//a[text()="Create Lead"]')
    //in create lead when u touch we can choose unique here alphanumeric in id so taken text
    await page.locator('//input[@id="createLeadForm_companyName"]').fill('Testleaf')
    await page.locator('//input[@id="createLeadForm_firstName"]').fill('Nandhini')
    await page.locator('//input[@id="createLeadForm_lastName"]').fill('sundar')
    //create lead at end like submit
    await page.locator('//input[@type="submit"]').click()
    await page.waitForLoadState('domcontentloaded')
    //now edit option click
    await page.locator('//a[text()="Edit"]').click()
    await page.waitForLoadState('domcontentloaded')
    
    //change the company name
    await page.locator('//input[@id="updateLeadForm_companyName"]').fill('Google')
    //update click that
    await page.locator('//input[@value="Update"]').click()

})
