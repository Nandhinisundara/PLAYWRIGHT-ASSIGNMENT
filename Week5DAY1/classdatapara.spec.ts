import {test} from "@playwright/test"

import data from "../../utils/Leaf.json"
//test.describe.serial('running serially',()=>{
for(let login of data){
test(`learn to read data from JSON ${login.TestcaseID}`, async({page})=>{

    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('#username').fill(login.Username)
    await page.locator('#password').fill(login.Password)
    await page.locator('#Login').click()


})
}
