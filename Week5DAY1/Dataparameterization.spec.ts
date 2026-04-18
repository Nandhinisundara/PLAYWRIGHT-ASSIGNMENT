import {test} from "@playwright/test"

import data from "../../utils/Leaf.json"
//test.describe.serial('running serially', async()=>{
/* for(let login of data){
test(learn to read data from JSON ${login.TestcaseID}, async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill(login.Username)
    await page.locator('input[id="password"]').fill(login.Password)
    await page.locator('.decorativeSubmit').click()
    await page.locator('text=CRM/SFA').click()

})
} */
//})


//test to read single value

let login=data[1]
test(learn to read data from JSON ${login.TestcaseID}, async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill(login.Username)
    await page.locator('input[id="password"]').fill(login.Password)
    await page.locator('.decorativeSubmit').click()
    await page.locator('text=CRM/SFA').click()

})