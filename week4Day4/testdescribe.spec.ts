import {test} from "@playwright/test"

test.describe('smoke testing',()=>{
test.describe.configure({mode:"default",retries:1})

test('Launch Amazon', async({page})=>{

await page.goto("https://www.amazon.in/")
  
})


test('Launch flipkart', async({page})=>{

await page.goto("https://www.flipkart.com/")
  
})


test('learn to use test.slow', async ({page}) => {
test.slow()
await page.goto('https://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill('demosalesmanager')
await page.locator('#password').fill('crmsfa')
await page.locator('.decorativeSubmit').click()
await page.locator('//a[contains(text(),"CRM")]').click()
    
})

})