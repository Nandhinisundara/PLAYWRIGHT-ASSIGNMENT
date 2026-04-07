import{test,expect} from '@playwright/test'
test('learn handle frames',async({page})=>{
    //go to link
   await page.goto('https://leafground.com/frame.xhtml')

   //step 1 Interact with the Click Me button inside frame  using frame locator
   await page.frameLocator('//iframe[@src="default.xhtml"]').locator('#Click').click()//click the button
   
   //step 2 Assert the text changed after clicking the button 
   const textMsg=await page.frameLocator('//iframe[@src="default.xhtml"]').locator('#Click').textContent()
   console.log(`Text name is ${textMsg}`)//display the clicked text
   expect(textMsg).toBe('Hurray! You Clicked Me.')
   console.log('Text is verified')

   //step 3 Get the total count of frames present in the page
   const totalFrame=page.frames() //store all frame
   const Noofframes=totalFrame.length
   console.log(`No of frames is ${Noofframes}`)

   //step 4 Interact with the Click Me button present inside the nested frames 
   //outerframe and innerframe and locator click
   await page.frameLocator('//iframe[@src="page.xhtml"]').frameLocator('#frame2').locator('#Click').click()
   const nestedText=await page.frameLocator('//iframe[@src="page.xhtml"]').frameLocator('#frame2').locator('#Click').textContent()
   console.log(`Nested Text after click is ${nestedText}`)
   expect(nestedText).toBe('Hurray! You Clicked Me.')
   console.log('Nested text is verified')

})