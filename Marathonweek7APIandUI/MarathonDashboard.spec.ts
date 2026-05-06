import{test,expect} from '@playwright/test'

let Accesstoken:any  
let url:any
let tokenType:any

let ID="01Zg5000002YbTpEAK"
test.use({
    storageState:'data/Apisalesforce.json'
   
})


test.describe.serial('Execute in serial mode',async()=>{
test('create a dashboard in UI salesforce',async({page})=>{
    
    await page.goto('https://orgfarm-2f2ea4e54b-dev-ed.develop.lightning.force.com/lightning/page/home')
    //await page.goto('https://login.salesforce.com')
    await page.locator('.slds-icon-waffle').click()
    await page.waitForTimeout(3000)
    await page.locator('//button[@aria-label="View All Applications"]').click()//view all
    await page.waitForTimeout(3000)
    await page.locator('//input[@placeholder="Search apps or items..."]').fill('Dashboards')
    await page.keyboard.press('Enter')
    await page.waitForTimeout(10000) 
    await page.locator('//mark[text()="Dashboards"]').click()
    //click on new dashboard
    await page.locator('//div[@title="New Dashboard"]').click()
    //await page.locator('//input[@id="dashboardNameInput"]').fill('Salesforce Automation by Nandhini')
    //using frames enter name
    await page.frameLocator('//iframe[@title="dashboard"]').locator('#dashboardNameInput').fill('Salesforce Automation by Nandhini')
    //use frame to create
    await page.frameLocator('//iframe[@title="dashboard"]').getByRole('button',{name:'Create',exact:true}).click()
    await page.frameLocator('//iframe[@title="dashboard"]').locator('//button[@class="slds-button slds-button_neutral save"]').waitFor({state:'visible',timeout:15000})
    await page.waitForTimeout(15000)
    await page.frameLocator('//iframe[@title="dashboard"]').locator('//button[@class="slds-button slds-button_neutral save"]').click()
   // await page.frameLocator('//iframe[@title="dashboard"]').locator('//button[@class="slds-button slds-button_neutral save"]').click()
    //saving the saved msg and verify
    await page.locator('//span[contains(@class,"toastMessage slds-text-heading") and contains(.,"Dashboard saved")]').waitFor({state:'visible',timeout:15000})
    let savedMsg=await page.locator('//span[contains(@class,"toastMessage slds-text-heading") and contains(.,"Dashboard saved")]').textContent()
    expect(savedMsg).toContain('Dashboard saved')
    console.log('Dashboard saved message verified')
    //verify dashboard name on top
   let dashBoardVerify=await page.frameLocator('//iframe[@title="dashboard"]').locator('//span[@class="slds-form-element__static slds-grid slds-grid_align-spread"]').textContent()
   expect(dashBoardVerify).toContain('Salesforce Automation by Nandhini')
   console.log('Dashboard name verified!')



    })


   
    //generate token


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


//get the data

test('fetch Dashboard using  playwrightwithAPI',async({request})=>{
    
        let response=await request.get(`${url}/services/data/v65.0/sobjects/Dashboard/${ID}`,
    
            {
                headers:
                {
                    "content-type":"application/json",
                    "Authorization": `${tokenType} ${Accesstoken}`
                }
            }
    
    
        )

    let responsebody=await response.json()
    console.log(responsebody)
    
    let status=response.status()
    console.log(status)
    expect(status).toBe(200)
    
    let statusText=response.statusText()
    console.log(statusText)
    expect(statusText).toBe('OK')
    
    })

    
//delete the data
test("to delete the Dashboard using PW API", async({request})=>{
    
    
let response=await request.delete(`${url}/services/data/v65.0/sobjects/Dashboard/${ID}`,
    
    
            {
                headers:{
    
    
        "Content-Type":"application/json",
        "Authorization":`${tokenType} ${Accesstoken}`
    
    
                }
    })
        
        console.log(response.status());
        console.log(response.statusText());
    
    
        expect(response.status()).toBe(204)
        expect(response.statusText()).toBe("No Content")
       console.log('Dashboard deleted successfully')
    
    })
  
})

