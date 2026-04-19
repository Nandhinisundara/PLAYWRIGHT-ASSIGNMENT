import {test} from "@playwright/test"
import dotenv from "dotenv"


//console.log(process.env.username);  //prints the system environment


// to read a single env file
//dotenv.config({path:'data/prod.env'})


// toggle between different environment

let filename=process.env.envfile || "qa" //env.envfile used to read the env from terminal
 dotenv.config({path:`data/${filename}.env`})



//console.log(process.env.LF_Url)


let URL=process.env.LF_Url as string
let Username=process.env.LF_Username as string
let Password=process.env.LF_Password as string


test(`learn to read data from JSON `, async({page})=>{

    await page.goto(URL)
    await page.locator('#username').fill(Username)
    await page.locator('input[id="password"]').fill(Password)
    await page.locator('.decorativeSubmit').click()
    await page.locator('text=CRM/SFA').click()
})
 


//$env:envfile="qa"  => set the environment in qa
//$env:envfile="" =>unset the environment
//$env:envfile => check the environment