import{test,expect} from '@playwright/test' 

let url:any
let tokenType:any
let Token:any
let contactID:any
let AccountId:any
let caseid:any

test.describe.serial('execute the script in serial mode',async()=>{
test('create Token in salesforce with playwright in API',async({request})=>{
  //http endpoint
 let  response=await request.post('https://login.salesforce.com/services/oauth2/token',
    {
        headers:{
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

 //response will be in raw string so convert json to object so creating a varibale storing 
 let responsebody=await response.json()//convert
 console.log(responsebody)
 
 let status=response.status()
console.log(status)
expect(status).toBe(200)

let statusText=response.statusText()
console.log(statusText)
expect(statusText).toBe("OK")

url=responsebody.instance_url
console.log(url)

Token=responsebody.access_token
console.log(Token)

tokenType=responsebody.token_type
console.log(tokenType)
})

test('create contact in salesforce with playwright in API',async({request})=>{
    let response=await request.post(`${url}/services/data/v65.0/sobjects/Contact`,
        {
      headers:
   {
    "Content-Type":"application/json",
    "Authorization":`${tokenType} ${Token}`
    
   },
   data:
   {
    "LastName":"sathish"
   }
})

let responsebody=await response.json()
console.log(responsebody)

let status=response.status()
console.log(status)
expect(status).toBe(201)

let statusText=response.statusText()
console.log(statusText)
expect(statusText).toBe("Created")

contactID=responsebody.id
console.log(contactID)
})



test('create Account in salesforce with playwright in API',async({request})=>{
    let response=await request.post(`${url}/services/data/v65.0/sobjects/Account`,
        {
      headers:
   {
    "Content-Type":"application/json",
    "Authorization":`${tokenType} ${Token}`
    
   },
   data:
   {
    "Name":"Bhuvanesh"
   }
})

let responsebody=await response.json()
console.log(responsebody)

let status=response.status()
console.log(status)
expect(status).toBe(201)

let statusText=response.statusText()
console.log(statusText)
expect(statusText).toBe("Created")

AccountId=responsebody.id
console.log(AccountId)
})


test('create case in salesforce with playwright in API',async({request})=>{
    let response=await request.post(`${url}/services/data/v65.0/sobjects/Case`,
        {
      headers:
   {
    "Content-Type":"application/json",
    "Authorization":`${tokenType} ${Token}`
    
   },
   data:
   {
    "AccountId":AccountId,  //using variable for id so noquotes
    "ContactId":contactID,
    "Status":"Working",
    "Origin":"Phone"
   }
})

let responsebody=await response.json()
console.log(responsebody)

let status=response.status()
console.log(status)
expect(status).toBe(201)

let statusText=response.statusText()
console.log(statusText)
expect(statusText).toBe("Created")

caseid=responsebody.id
console.log(caseid)
})


test('fetch case in salesforce with playwright in API',async({request})=>{
    let response=await request.get(`${url}/services/data/v65.0/sobjects/Case/${caseid}`,
        {
      headers:
   {
    "Content-Type":"application/json",
    "Authorization":`${tokenType} ${Token}`
    
   }

})

let responsebody=await response.json()
console.log(responsebody)

let status=response.status()
console.log(status)
expect(status).toBe(200)

let statusText=response.statusText()
console.log(statusText)
expect(statusText).toBe("OK")
console.log("case is fetched")


})


test('update case in salesforce with playwright in API',async({request})=>{
    let response=await request.patch(`${url}/services/data/v65.0/sobjects/Case/${caseid}`,
        {
      headers:
   {
    "Content-Type":"application/json",
    "Authorization":`${tokenType} ${Token}`
    
   },
   data:
   {
    "AccountId":AccountId,
    "ContactId":contactID,
    "Status":"Escalated",
    "Origin":"Phone"
   }
})

let status=response.status()
console.log(status)
expect(status).toBe(204)

let statusText=response.statusText()
console.log(statusText)
expect(statusText).toBe("No Content")


})


test('delete case in salesforce with playwright in API',async({request})=>{
    let response=await request.delete(`${url}/services/data/v65.0/sobjects/Case/${caseid}`,
        {
      headers:
   {
    "Content-Type":"application/json",
    "Authorization":`${tokenType} ${Token}`
    
   }
  
})

let status=response.status()
console.log(status)
expect(status).toBe(204)

let statusText=response.statusText()
console.log(statusText)
expect(statusText).toBe("No Content")


})


})