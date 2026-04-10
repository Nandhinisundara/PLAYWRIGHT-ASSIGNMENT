/*
Classroom
---------


https://www.leafground.com/window.xhtml 
-> click on Open button
-> switch to child page
-> Child Page -> Enter Message
-> close childpage
-> click on open multiple in the main page
*/

import {test} from "@playwright/test"

test('Sequential way of handling windows', async({page,context})=>{

    await page.goto("https://www.leafground.com/window.xhtml")
    //event listener
    let parentwindow=context.waitForEvent('page')
    //click open button
    await page.locator('//span[text()="Open"]').click()
    //child page open
    let childwindow=await parentwindow;
    await childwindow.locator('#email').fill('nandhinisundara25@gmail.com')
    await childwindow.locator('//span[text()="Send"]').click()
    console.log(await childwindow.title()); //child window
    await childwindow.close()
    await page.locator('//span[text()="Open Multiple"]').click()
    
   



})