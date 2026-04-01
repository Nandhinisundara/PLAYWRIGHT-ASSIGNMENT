

//Classroom 2: Write the typescript code to automate the below testcase using Playwright locators.

//Url: https://parabank.parasoft.com/parabank/index.htm
//click on forgot login info? using getByRole locator
//cick on Parabank logo using getByAltText locator or click on parabank logo using getByTitle locator
//click on locations using getByText locator
//click on search icon in the navigated page using getByText
//click on search textbox using getByPlaceholder and enter the location name as "chennai"


import {test} from '@playwright/test';
test('learn playwright locators', async({ page })=>{

    await page.goto('https://parabank.parasoft.com/parabank/index.htm')
    await page.getByRole('link',{name:'Forgot login info?',exact:true}).click()
    await page.getByAltText('ParaBank').click()
    await page.getByText('Locations').first().click()
    await page.getByPlaceholder('Search').fill('chennai')
});