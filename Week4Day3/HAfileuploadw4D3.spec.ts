import {test,expect} from '@playwright/test'
test('File upload in web application',async({page})=>{
    
    await page.goto('https://login.salesforce.com/')
    
    //Enter username 
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    
    //Enter password 
    await page.locator('#password').fill('TestLeaf@2025')
    
    //Click Login 
    await page.locator('#Login').click()
   
    //Click App Launcher icon
    await page.getByRole('button',{name:'App Launcher'}).click()
   
    //Click View All 
    await page.getByRole('button',{name:'View All Applications'}).click()
    
    //Enter Accounts in App Launcher search box
    await page.locator('//input[@placeholder="Search apps or items..."]').fill('Accounts')
    await page.waitForTimeout(2000)
    await page.keyboard.press('Enter')
    await page.waitForTimeout(3000) 
    
    //Click Accounts
    await page.locator('//a[@data-label="Accounts"]').click()
    
    //Click New 
    await page.locator('//div[@title="New"]').click()
    
    //Enter Account Name 
   await page.locator('//input[@name="Name"]').fill('Nandhini')
   
   //Select Prospect from the Type dropdown 
  await page.getByRole("combobox",{name: 'Type'}).click()

  await page.locator("//lightning-base-combobox-item[@data-value='Prospect']").click()

  //select indistry

 const industry= await page.getByRole("combobox",{name: 'Industry'})
 await expect(industry).toBeVisible()
await expect(industry).toBeEnabled()
  await industry.click()

  const banking=await page.locator("//lightning-base-combobox-item[@data-value='Banking']")
  if(!await banking.isVisible()){
    await industry.click()
    
    }
   else{
    await banking.click()
   }
   //Click Save 
   await page.getByRole('button',{name:'Save',exact:true}).click()
   
   //Assert the Account created
   const accountVerify=await page.locator('//lightning-formatted-text[@slot="primaryField"]').textContent()
   expect (accountVerify).toContain('Nandhini')
   console.log('Account is created and verified')
   
   //Upload files  
   const fileupload=page.locator('//input[@type="file"]')
  await fileupload.setInputFiles('Utils/STRING CHEAT SHEET.pdf')
  await page.waitForTimeout(2000) 
})