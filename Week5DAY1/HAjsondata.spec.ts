import {test} from "@playwright/test"

import data from "../../utils/input.json"
//test.describe.serial('running serially', async()=>{


for(let input of data){
test(`learn to read data from csv ${input.Testcaseid}`, async({page})=>{
    //login to page
  await page.goto('https://leaftaps.com/opentaps/control/main')
  //enter username and password
  await page.getByRole('textbox',{name:'Username'}).fill(input.Username)
  await page.getByRole('textbox',{name:'Password'}).fill(input.Password)
  //Click Login
  await page.getByRole('button',{name:'Login'}).click()
  //Click CRM/SFA
  await page.getByRole('link',{name:'CRM/SFA'}).click()
  //Click Leads
  await page.getByRole('link',{name:'Leads'}).click()
  //Click Create Leads
  await page.getByRole('link',{name:'Create Lead'}).click()
  //Fill all the mandatory fields such as Company name, First name and Last name
  await page.locator('#createLeadForm_companyName').fill(input.companyName)
  await page.locator('#createLeadForm_firstName').fill(input.firstName)
  //Select Direct Mail from the Source dropdown using label
  await page.locator('#createLeadForm_dataSourceId').selectOption({label:input.source})
  //Select Demo Marketing Campaign from the Marketing Campaign dropdown using value 
  await page.locator('#createLeadForm_marketingCampaignId').selectOption({value:input.Marketingcampaign})
  // Get the count and print all the values in the Marketing Campaign dropdown
const dropDown=page.locator('//select[@id="createLeadForm_dataSourceId"]/option')//all element store here
const count=await dropDown.count() //count the element and store
console.log(`No of Marketing Campaign count in dropdown ${count}`)

//to print thevalues
for(let i=0;i<count;i++){
  const text=await dropDown.nth(i).textContent()

}
//Select General Services from the Industry dropdown using index
await page.locator('#createLeadForm_industryEnumId').selectOption({index:parseInt(input.Industry)})
//Select INR from the Preferred Currency dropdown
await page.locator('#createLeadForm_currencyUomId').selectOption({label:input.preferredcurrency})
//Select India from the Country dropdown
await page.locator('#createLeadForm_generalCountryGeoId').selectOption({label:input.country})
await page.waitForTimeout(2000)
//Select any state from the State dropdown
await page.locator('#createLeadForm_generalStateProvinceGeoId').selectOption({label:input.state})
//Get the count of all states and print the values in the console
const state=page.locator('//select[@id="createLeadForm_generalStateProvinceGeoId"]/option')//store stae option
const stateCount=await state.count()//count the element inside
console.log(`Total state count is ${stateCount}`)
//values

for(let i=0;i<stateCount;i++){
  const text=await state.nth(i).textContent()
  console.log(text)
}

//create lead

await page.locator('//input[@value="Create Lead"]').click() 


})
}



