import {test,expect} from "@playwright/test"
import dotenv from "dotenv"

//let filename=process.env.envfile || "production"//env.envfile used to read the env from terminal
//dotenv.config({path:`data/${filename}.env`})
//running single file syntax
dotenv.config({path:'data/quality.env'})

let URL=process.env.LF_Url as string
let Username=process.env.LF_Username as string
let Password=process.env.LF_Password as string
let lastName=process.env.LF_lastName as string
let company=process.env.LF_company as string
let leadVerify=process.env.LF_leadVerify as string

test(`learn to read data from env`, async({page})=>{

    await page.goto(URL)
    //await page.getByRole('textbox',{name:'Login'}).click()//this alone getby role in accesability area
    //we can for pwd visible text and getby label also 
    await page.locator('#username').fill(Username)
    await page.locator('input[id="password"]').fill(Password)
    await page.getByRole('button',{name:'Log In',exact:true}).click()
     //click on toggle button
    await page.locator('.slds-icon-waffle').click()
    //click view all here for unique we taken this button is the tag name that is click action alone 
    //this new one
    await page.locator('//button[@aria-label="View All Applications"]').click()
    await page.waitForTimeout(5000)
 //click sales 
    await page.locator('//lightning-formatted-rich-text[@class="slds-rich-text-editor__output"]//p[text()="Sales"]').click()
    //click on leads 
    await page.locator('//a[@title="Leads"]/span[text()="Leads"]').click()
    //click on new inside lead 
    await page.locator('//div[@title="New"]').click()
    //click on salunation and select mr
    await page.locator('//button[@name="salutation"]').click()
    //click inside the salunation button as mr
    await page.locator('//span[text()="Mr."]').click()
    //enter the last name
    await page.locator('//input[@name="lastName"]').fill(lastName)
    //enter the company name
    await page.locator('//input[@name="Company"]').fill(company)
    //save 
    await page.locator('//button[@name="SaveEdit"]').click()
    //to verify the saved leadname click lead button
    
    //latest one
    await page.locator('//lightning-formatted-name[@slot="primaryField"]').click()
    //directly move to lead name created page
    const leadName=await page.locator('//lightning-formatted-name[@slot="primaryField"]').textContent()
    expect(leadName).toContain(leadVerify);
    console.log('verified succesfully')

})
