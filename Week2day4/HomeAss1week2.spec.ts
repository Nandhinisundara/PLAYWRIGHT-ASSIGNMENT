import {test,expect} from '@playwright/test'

test('learn assertion',async({page})=>{
    //s1 go to url
    await page.goto('https://leafground.com/radio.xhtml ')

    //await page.getByRole('textbox',{name:'Login'}).click()
    //s2 Identify and assert the default selected radio button. tobechecked() need to use
    await expect(page.getByLabel('Safari').nth(1)).toBeChecked()
    console.log('default select radio button safari is displayed')
    await expect(page.getByLabel('21-40 Years')).toBeChecked()
    console.log('default selected radio button age is displayed')
    
    //click the fav brow assert it is enables
    //click the broweser
     await page.locator('//label[text()="Firefox"]').nth(0).click()

// Assert using getByRole with force
    await expect(page.locator('//label[text()="Firefox"]').nth(0)).toBeEnabled()
    console.log('Firefox is enabled')
    
    //select the city
    //await page.locator('//span[@class="ui-radiobutton-icon ui-icon ui-c ui-icon-blank"]').click({force:true})
    //await page.getByRole('radio',{name:'Chennai'}).first().click()
    //console.log('Favorite chennai is selected')
    // Checks if radio/checkbox is selected
    await expect(page.getByLabel('21-40 Years')).toBeChecked()
    console.log('age is selected by default')

    
})