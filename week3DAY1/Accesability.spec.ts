import {test} from '@playwright/test';
test('learn playwright locators', async({page})=>{

    await page.goto('https://login.salesforce.com/')
    //await page.getByRole('textbox',{name:'Login'}).click()//this alone getby role in accesability area
    //we can for pwd visible text and getby label also 
    await page.getByLabel('Username').fill('dilipkumar.rajendran@testleaf.com')
    await page.getByText('Password').fill('TestLeaf@2025')
    await page.getByRole('button',{name:'Log In',exact:true}).click()
    await page.getByPlaceholder('Search...').fill('leads')
    await page.getByAltText('Salesforce login').click()
    await page.getByTitle('App Launcher')

})