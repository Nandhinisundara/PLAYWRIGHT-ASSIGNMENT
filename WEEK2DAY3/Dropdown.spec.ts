//we are goin to login create lead ,source and list the dropdown and print that 

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
    //await page.locator('//select[@id="createLeadForm_dataSourceId"]').selectOption({value:'LEAD_CONFERENCE'})
//by value label and index we can select the option in the dropdown
    //await page .waitForTimeout(2000)
    //await page.locator('//select[@id="createLeadForm_dataSourceId"]').selectOption({label:'Direct Mail'})
    //await page .waitForTimeout(2000)
    //await page.locator('//select[@id="createLeadForm_dataSourceId"]').selectOption({index:4}) 
//in above by value,label,index we wre printing particular element
//we separetly wes= sawthe option now going to print all the option in dropdown
//we are storing in a variable  and after that will print
    const dropDown=page.locator('//select[@id="createLeadForm_dataSourceId"]/option') //no of element store in the variable
    //no of option or element stored in this
    const dropDowncount=await dropDown.count()//count will save in this varibale
    console.log(`No of values in dropDown is ${dropDowncount}`)
    console.log(await dropDown.nth(0).innerText())//in dropdown stored element it will print the inner text vale of index 0
    console.log(await dropDown.nth(1).innerText())
    //index by index we can print like this

    for(let index=0;index<dropDowncount;index++)
    {
        console.log(await dropDown.nth(index).innerText())
//using for loop prin all element in dropdown
    }

})
