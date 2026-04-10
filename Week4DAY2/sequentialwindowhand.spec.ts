import {test} from "@playwright/test"

test('Sequential way of handling windows', async({page,context})=>{

    await page.goto("https://www.amazon.in/")

    let searchBox=page.locator('//input[@id="twotabsearchtextbox"]')

    await searchBox.fill('iphone')
    await searchBox.press('Enter')

    let parentWindow=context.waitForEvent('page') //create the event listener and promise is created-pending

    await page.locator('//span[contains(text(),"iPhone 17 Pro")]').nth(1).click() //click action

    let childWindow=await parentWindow // resolving the promise

    const price=await childWindow.locator("(//span[text()='1,49,900'])[5]").innerText()
    console.log(price);

    console.log(await childWindow.title()); //child window
    console.log(await page.title()); //parent page or main 
      

})