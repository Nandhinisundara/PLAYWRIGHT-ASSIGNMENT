import {test,expect} from "@playwright/test"

test('handling multiple windows',async({page,context})=>{
    //goto the page
    await page.goto('http://leaftaps.com/opentaps/control/main')
    //enter username
    await page.getByRole('textbox',{name:'Username'}).fill('demosalesmanager')
    //enter password
    await page.getByRole('textbox',{name:'Password'}).fill('crmsfa')
    //click login
    await page.getByRole('button',{name:'Login'}).click()
    //click crmsfa 
    await page.getByRole('link',{name:'CRM/SFA'}).click()
    //click lead
    await page.getByRole('link',{name:'Leads'}).click()
    //merge lead
    await page.getByRole('link',{name:'Merge Leads'}).click()
    //before click to new page create a event listner first
    //Click From Lead widget first window handling
    const[childPageone]=await Promise.all([context.waitForEvent('page'),page.getByRole('link',{name:'Lookup'}).first().click()])
    //Select the first resulting lead id 
    await childPageone.locator('//div[contains(@class,"partyId")]/a[@class="linktext"]').nth(0).click()

    //second window handling 
    //Click To Lead widget
    const[childPagetwo]=await Promise.all([context.waitForEvent('page'),page.getByRole('link',{name:'Lookup'}).nth(1).click()])
    //Select the second resulting lead id
    await childPagetwo.locator('//div[contains(@class,"partyId")]/a[@class="linktext"]').nth(1).click()
    //merge
    //even listener for popup alert
     page.once('dialog', async (alert) => {
        await alert.accept();
    })
   await page.locator('//a[@class="buttonDangerous"]').click()
   await expect(page).toHaveTitle('View Lead | opentaps CRM')
})