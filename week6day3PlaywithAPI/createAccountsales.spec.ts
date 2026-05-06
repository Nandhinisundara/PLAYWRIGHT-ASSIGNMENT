/*
Classroom Activity:
-------------------


Write a Playwright API script to perform CRUD operations for Salesforce Account.
*/
import { test, expect } from "@playwright/test"


 let Token:any
 let URL:any
 let tokenType:any
 let Id:any


test.describe.serial('Execute the script in serial mode', async()=>{



test("To generate the token using PW API", async ({ request }) => {


  let response= await request.post('https://login.salesforce.com/services/oauth2/token',
        {
            headers: {


                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {//no auth token will generate
                "grant_type": "password",
                "client_id": "3MVG97L7PWbPq6UzdjOuMiXRS7K0uEaSoORrHC8XBAmc2UX3t9FgbxgCp_gk.EIBSMMLETu.MhsdVz5AAcP6Q",
                "client_secret":"3DE507D5A25B565A28A9DC6D42D8E99BED6BA56012189129336BFE12A5954D8D",
                "username": "nandhinivenugopal2023.00500069644e@agentforce.com",
                "password": "Nandhini@25hF0frlKiZD9vyHmmBDDzow148"
        }
    })
     let responsebody=await response.json()
        console.log(responsebody);


    console.log(response.status());
    console.log(response.statusText());


    expect(response.status()).toBe(200)
    expect(response.statusText()).toBe("OK")
 
    Token=responsebody.access_token
    console.log(Token);
    
    URL=responsebody.instance_url
    console.log(URL);
    
    tokenType=responsebody.token_type
    console.log(tokenType)


})



test("to create a lead using PW API", async({request})=>{


    let response=await request.post(`${URL}/services/data/v65.0/sobjects/Account`,


        {
            headers:{


    "Content-Type":"application/json",
    "Authorization":`${tokenType} ${Token}`


            },


            data:{


                "Name" :"Jyoshika"
                


     }
})
    let responsebody=await response.json()
    console.log(responsebody);


    console.log(response.status());
    console.log(response.statusText());


    expect(response.status()).toBe(201)
    expect(response.statusText()).toBe("Created")


    Id=responsebody.id



})



test("to fetch lead using PW API", async({request})=>{


    let response=await request.get(`${URL}/services/data/v65.0/sobjects/Account/${Id}`,


        {
            headers:{


    "Content-Type":"application/json",
    "Authorization":`${tokenType} ${Token}`


            }
})
    let responsebody=await response.json()
    console.log(responsebody);


    console.log(response.status());
    console.log(response.statusText());


    expect(response.status()).toBe(200)
    expect(response.statusText()).toBe("OK")


})



test("to update the lead using PW API", async({request})=>{


    let response=await request.patch(`${URL}/services/data/v65.0/sobjects/Account/${Id}`,


        {
            headers:{


    "Content-Type":"application/json",
    "Authorization":`${tokenType} ${Token}`


            },


            data:{


                "Name" :"Jyoshikasathish"
               


            }
})
    
    console.log(response.status());
    console.log(response.statusText());


    expect(response.status()).toBe(204)
    expect(response.statusText()).toBe("No Content")


})



test("to delete the lead using PW API", async({request})=>{


    let response=await request.delete(`${URL}/services/data/v65.0/sobjects/Account/${Id}`,


        {
            headers:{


    "Content-Type":"application/json",
    "Authorization":`${tokenType} ${Token}`


            }
})
    
    console.log(response.status());
    console.log(response.statusText());


      expect(response.status()).toBe(204)
      expect(response.statusText()).toBe("No Content")


})
    
})