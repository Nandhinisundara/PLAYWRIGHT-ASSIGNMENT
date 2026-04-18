import {test} from "@playwright/test"
import {parse} from "csv-parse/sync"
import path from 'path'
import fs from 'fs'


// Absolute path

//let value:any[]=parse(fs.readFileSync(path.join(__dirname,"../../data/testData.csv")),{columns:true})

//Relative path
let value:any[]=parse(fs.readFileSync("data/testData.csv"),{columns:true, skip_empty_lines:true})
/*
for(let login of value){
test(`learn to read data from csv ${login.Testcaseid}`, async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill(login.username)
    await page.locator('input[id="password"]').fill(login.password)
    await page.locator('.decorativeSubmit').click()
    await page.locator('text=CRM/SFA').click()
 
})
}

*/
//to read a single value

let login=value[0]
test(`learn to read data from csv ${login.Testcaseid}`, async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill(login.username)
    await page.locator('input[id="password"]').fill(login.password)
    await page.locator('.decorativeSubmit').click()
    await page.locator('text=CRM/SFA').click()
 
}) 