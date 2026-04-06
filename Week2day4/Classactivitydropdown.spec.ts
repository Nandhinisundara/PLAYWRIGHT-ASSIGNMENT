/*
Classroom 1:
------------
Step 1: launch the leafground url
URL:https://www.leafground.com/select.xhtml


step 2: Print all the automation tools using Selectoption dropdown method.


Step 3: Choose the preferred country as "India" using custom dropdown method
*/

import {test} from "@playwright/test"

test('Handling dropdowns in leafground',async({page})=>{

    await page.goto('https://www.leafground.com/select.xhtml')
    const dropDown=page.locator('//select[@class="ui-selectonemenu"]/option') //no of elements=13
    const dropDowncount=await dropDown.count()
    console.log('no of values in the dropDown is:',`${dropDowncount}`);
    for(let index=0;index<dropDowncount;index++){
        console.log(await dropDown.nth(index).innerText());
        
    }
    await page.locator('//label[text()="Select Country"]').click()
    await page.locator('//li[text()="India"]').click()

})