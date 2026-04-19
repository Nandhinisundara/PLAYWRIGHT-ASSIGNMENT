import {test} from "@playwright/test"
import dotenv from "dotenv"

// toggle between different environment

let filename=process.env.envfile||"prod" || "qa" || "dev" //env.envfile used to read the env from terminal
 dotenv.config({path:`data/${filename}.env}`})

let URL=process.env.LF_Url as string
let Username=process.env.LF_Username as string
let Password=process.env.LF_Password as string


test(`learn to read data from env `, async({page})=>{


    await page.goto(URL)
    await page.locator('#username').fill(Username)
    await page.locator('input[id="password"]').fill(Password)
    await page.locator('.decorativeSubmit').click()
    await page.locator('text=CRM/SFA').click()


})
 