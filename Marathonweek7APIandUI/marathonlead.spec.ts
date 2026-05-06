//lead in API
import{test,expect} from '@playwright/test'

let Accesstoken:any
let url:any
let tokenType:any
let ID:any




test.describe.serial('Execute in serial mode',async()=>{
test('Using Salesforce login generate token playwrightwithAPI',async({request})=>{

    let response=await request.post('https://login.salesforce.com/services/oauth2/token',
        {
            headers:
            {
                "content-type":"application/x-www-form-urlencoded"
            },
            form:{
                "grant_type":"password",
                "client_id":"3MVG97L7PWbPq6UzdjOuMiXRS7K0uEaSoORrHC8XBAmc2UX3t9FgbxgCp_gk.EIBSMMLETu.MhsdVz5AAcP6Q",
                "client_secret":"3DE507D5A25B565A28A9DC6D42D8E99BED6BA56012189129336BFE12A5954D8D",
                "username":"nandhinivenugopal2023.00500069644e@agentforce.com",
                "password":"Nandhini@25hF0frlKiZD9vyHmmBDDzow148"
            }
        }


    )
//200 OK
//201 Created
//200 OK
let responsebody=await response.json()
console.log(responsebody)

let status=response.status()
console.log(status)
expect(status).toBe(200)

let statusText=response.statusText()
console.log(statusText)
expect(statusText).toBe('OK')
//taking accesstoken,instance url,tokentype to use further so storing it globally

Accesstoken=responsebody.access_token
console.log(Accesstoken)

url=responsebody.instance_url
console.log(url)

tokenType=responsebody.token_type
console.log(tokenType)

})


test('create lead using  playwrightwithAPI',async({request})=>{

    let response=await request.post(`${url}/services/data/v65.0/sobjects/Lead`,

        {
            headers:
            {
                "content-type":"application/json",
                "Authorization": `${tokenType} ${Accesstoken}`
            },
            data:{
                
                "FirstName" :"Shanmugam",
                "LastName":"Madhav",
                "Company":"Testleaf",
                "Salutation":"Mr."

            }
        }


    )
//200 OK
//201 Created
//200 OK
let responsebody=await response.json()
console.log(responsebody)

let status=response.status()
console.log(status)
expect(status).toBe(201)

let statusText=response.statusText()
console.log(statusText)
expect(statusText).toBe('Created')

ID=responsebody.id
console.log(ID)

})


test('fetch lead using  playwrightwithAPI',async({request})=>{

    let response=await request.get(`${url}/services/data/v65.0/sobjects/Lead/${ID}`,

        {
            headers:
            {
                "content-type":"application/json",
                "Authorization": `${tokenType} ${Accesstoken}`
            }
        }


    )
//200 OK
//201 Created
//200 OK
let responsebody=await response.json()
console.log(responsebody)

let status=response.status()
console.log(status)
expect(status).toBe(200)

let statusText=response.statusText()
console.log(statusText)
expect(statusText).toBe('OK')

})

test('Update lead using  playwrightwithAPI',async({request})=>{

    let response=await request.patch(`${url}/services/data/v65.0/sobjects/Lead/${ID}`,

        {
            headers:
            {
                "content-type":"application/json",
                "Authorization": `${tokenType} ${Accesstoken}`
            },
            data:{
                
                "FirstName" :"Shanmugam",
                "LastName":"Madhavanraj",
                "Company":"Testleaf",
                "Salutation":"Mr."

            }
        }


    )


let status=response.status()
console.log(status)
expect(status).toBe(204)

let statusText=response.statusText()
console.log(statusText)
expect(statusText).toBe('No Content')

})

test.use({
    storageState:'data/Apisalesforce.json'
   
})


test('After skip login delete the lead in UI', async({page}) => {

await page.goto('https://orgfarm-2f2ea4e54b-dev-ed.develop.lightning.force.com/lightning/page/home')
await page.waitForTimeout(3000)
await page.locator('.slds-icon-waffle').click()
await page.locator('//button[@aria-label="View All Applications"]').click()//view all
await page.waitForTimeout(3000)
await page.locator('//input[@placeholder="Search apps or items..."]').fill('leads')
await page.keyboard.press('Enter')
await page.waitForTimeout(3000) 
await page.locator('//mark[text()="Leads"]').click()
await page.waitForTimeout(6000) 
await page.locator('//input[@placeholder="Search this list..."]').fill('Madhavanraj')
await page.keyboard.press('Enter')
await page.getByRole('link',{name:'Shanmugam Madhavanraj',exact:true}).click()
//storing the lead name created to verify last name
let leadName=await page.locator('//slot[@name="primaryField"]').textContent()
//verify last name
expect(leadName).toContain('Madhavanraj')
console.log('The lead last name is verified')
await page.getByRole('button',{name:'Show more actions',exact:true}).click()
//click delete 
await page.locator('//span[text()="Delete"]').click()
//confirm the delete 
await page.getByRole('button',{name:'Delete',exact:true}).click()
//serach the delted name
await page.locator('//input[@placeholder="Search this list..."]').fill('Madhavanraj')
await page.keyboard.press('Enter')
await page.waitForTimeout(3000)
//displayed no match
//await expect(page.locator('//span[contains(text(),"didn\'t find any matches for")]')).toBeVisible()
await expect (page.getByRole('link',{name:'Shanmugam Madhavanraj',exact:true})).not.toBeVisible()
console.log("No records to display")

})
})