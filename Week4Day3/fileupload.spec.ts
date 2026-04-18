import {test} from "@playwright/test"
import path from "path"


test('Upload the file using input tag with type=file attribute',async({page})=>{


 await page.goto('https://www.leafground.com/file.xhtml')   


 //relative path
/*
const fileupload=page.locator('(//input[@type="file"])[1]')
  await fileupload.setInputFiles('Utils/rilakkuma.jpg')
  await page.waitForTimeout(2000) 
*/
/*
  const fileupload=page.locator('(//input[@type="file"])[2]')
  await fileupload.setInputFiles(['Utils/rilakkuma.jpg','Utils/miffy.jpg'])
  await page.waitForTimeout(3000)
*/

//absolute path 
//path.join(__dirname, `../../Data`, fDown.suggestedFilename())

/*

 const fileupload=page.locator('(//input[@type="file"])[1]')
await fileupload.setInputFiles(path.join(__dirname,'../../utils','rilakkuma.jpg'))
await page.waitForTimeout(3000) 
*/


const fileupload=page.locator('(//input[@type="file"])[2]')
await fileupload.setInputFiles([path.join(__dirname,'../../utils','rilakkuma.jpg'),path.join(__dirname,'../../utils','miffy.jpg')])
await page.waitForTimeout(3000) 


})