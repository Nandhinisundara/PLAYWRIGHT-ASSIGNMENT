import {test,expect} from '@playwright/test'

test('Auto wait Assertion',async({page})=>{
    //step 1 go to website
    await page.goto(' https://leafground.com/waits.xhtml')
    //step2 Wait for an element to become visible 
    await page.locator('//button[contains(@class,"ui-button-secondary")]').click()
    await expect (page.getByText('I am here')).toBeVisible({timeout: 15000})
    //await expect(page.locator('//button[contains(@class,"ui-button-secondary")]')).toBeVisible()
    console.log('element is visible displayed as I am here')
    
    //Wait for an element to disappear 
    await page.locator('//button[contains(@class,"ui-button-success")]').click()
    await expect (page.getByText('I am about to hide')).not.toBeVisible({timeout: 15000})
    console.log('element is disappeared')

    //Wait for an element to become clickable. 
    //first it is enabled ned to check
    await expect (page.getByRole('button',{name:'Click First Button'})).toBeEnabled()
    //then click it
    await page.getByRole('button',{name:'Click First Button'}).click()
    //then click second GamepadButton
    await page.locator('//span[text()="Click Second"]').click()

    //Check for text changes within an element and respond accordingly. 
    //checking the initial text is visible 
    await expect(page.getByRole('button',{name:'I am going to change!'})).toBeVisible()
    console.log('Initial text is visible')
    //click the click button
    await page.locator('//button[contains(@class,"ui-button-danger")]').click()
    //text going to change
    await expect(page.getByRole('button',{name:'Did you notice?'})).toHaveText('Did you notice?'),{timeout: 15000}
    console.log('Changed text Did you notice?')
})


//ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-button-secondary mr-2 mb-2
//ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-button-success mr-2 mb-2
//ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-button-danger mr-2 mb-2