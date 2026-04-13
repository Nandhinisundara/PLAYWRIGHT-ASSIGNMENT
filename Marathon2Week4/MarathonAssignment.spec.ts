import {test,expect} from '@playwright/test'


test('Service now application',async({page})=>{
    //Launch the ServiceNow application using the given URL
    await page.goto('https://dev280319.service-now.com/')
    //Enter User name as admin
    await page.locator('#user_name').fill('admin')
    //Enter Password with valid credentials.
    await page.locator('#user_password').fill('YApVc0-vyN5-')
    //Click on the Log in button
    await page.locator('#sysverb_login').click()
    //Wait for the ServiceNow home page to load successfully
    await page.waitForLoadState('domcontentloaded')
    //Click on the All menu from the left navigation panel
    await page.locator('div[aria-label="All"]').click()
    //Click on Service Catalog from the menu options
    await page.getByRole('link',{name:'Service Catalog 3 of 23',exact:true}).click()
    //Switch to the Service Catalog iframe 
    //frame handling
    const AllFrames=page.frames()
    const frameCount=AllFrames.length
    console.log(`frameCount is ${frameCount}`) 
    //Click on the Mobiles category.
    const mobileFrame=page.frameLocator('iframe[id="gsft_main"]')
    await mobileFrame.getByRole('link',{name:'Mobiles. Cell phones to meet your business needs.'}).nth(0).click()
    //Select Apple iPhone 13 Pro from the product list.
    await mobileFrame.getByAltText('Request for Apple iPhone 13 pro').nth(1).click()
    await page.waitForLoadState('networkidle')
    // Choose Yes for the Lost or Broken iPhone option.
    await mobileFrame.locator('input[value="yes"]').click({force: true})
    //Enter 99 in the Original phone number field
    await mobileFrame.getByLabel('What was the original phone number?').nth(0).fill('99')
    await page.waitForLoadState('networkidle');
    //Select Unlimited from the Monthly data allowance dropdown.
    await mobileFrame.getByLabel('Monthly data allowance').nth(1).selectOption({value:'unlimited'})
    await page.waitForLoadState('networkidle');
    //Select Sierra Blue as the color option.
    await mobileFrame.locator('input[value="sierra_blue"]').click({force: true})
    await page.waitForLoadState('networkidle');
    //Select 512 GB as the storage option.
    await mobileFrame.locator('input[value="512"]').click({force: true})
    await page.waitForLoadState('networkidle');
    //Click on the Order Now button.
    await mobileFrame.getByRole('button',{name:'Order Now'}).nth(0).click()
    //Verify the confirmation message is displayed
   const verifyMsg= await mobileFrame.getByText('Thank you, your request has been submitted').textContent()
    //Assertion
    expect(verifyMsg).toContain('Thank you, your request has been submitted')
    console.log('message is verified')
    console.log('The order for Apple iPhone 13 Pro is successfully placed')
    //Capture a full-page screenshot of the order confirmation page
     await page.screenshot({ path: 'folder/file.png', fullPage: true });
})


    

