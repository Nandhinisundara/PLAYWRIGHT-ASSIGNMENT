import {test} from '@playwright/test';
test('learn playwright locators', async({ page })=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.getByRole('textbox',{name:'Username',exact:true}).fill('Demosalesmanager')
    await page.getByText('Password').fill('crmsfa')
    await page.getByRole('button',{name:'Login',exact:true}).click()
    await page.getByRole('link',{name:'CRM/SFA',exact:true}).click()
    await page.getByRole('link',{name:'Leads',exact:true}).click()
    await page.getByText('Create Lead').first().click()
    await page.locator('#createLeadForm_companyName').fill('Testleaf')
    await page.locator('#createLeadForm_firstName').fill('Nandhini')
    await page.locator('#createLeadForm_lastName').fill('sundar')
    await page.locator('#createLeadForm_personalTitle').fill('Mrs')
    await page.locator('#createLeadForm_generalProfTitle').fill('Details')
    await page.locator('#createLeadForm_annualRevenue').fill('1lakth')
    await page.locator('#createLeadForm_departmentName').fill('sales')
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9698668435')
    await page.locator('//input[@name="submitButton"]').click()


})