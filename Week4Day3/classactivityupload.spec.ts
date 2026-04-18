/*
Classroom:
----------


Step1: login to URL
https://www.naukri.com/registration/createAccount


Step2: click on I'm experienced


Step3: upload the file using setInputFiles()
*/



import {test} from "@playwright/test"
import path from "path"


test('Upload the file using input tag with type=file attribute',async({page})=>{


 await page.goto('https://www.naukri.com/registration/createAccount')  
 await page.locator('//h2[contains(text(),"experienced")]').click()
 const fileupload=page.locator('(//input[@type="file"])[1]')
  await fileupload.setInputFiles('utils/STRING CHEAT SHEET.pdf')
  await page.waitForTimeout(2000)

})