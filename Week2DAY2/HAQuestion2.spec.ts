import {test} from '@playwright/test';
test('learn playwright locators', async({ page })=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('Demosalesmanager')
    await page.locator('#password').fill('crmsfa')
    await page.locator('input[type="submit"]').click()
    await page.locator('//a[contains(text(),"CRM")]').click()
    await page.locator('//a[text()="Leads"]').click()
    await page.locator('//a[text()="Create Lead"]').click()
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