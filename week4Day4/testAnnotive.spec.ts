import {test} from "@playwright/test"

test('Launch Amazon', async({page})=>{

await page.goto("https://www.amazon.in/")
  
})

test.skip('Launch flipkart', async({page})=>{

await page.goto("https://www.flipkart.com/")
  
})


test.fail('Leaftaps login', async ({page}) => {
await page.goto('https://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill('demosalesmanager')
await page.locator('#password').fill('crmsfa')
await page.locator('.decorativeSubmit').click()
await page.locator('//a[contains(text(),"CRM")]').click()
    
})

test.fixme('login', async ({page}) => {
await page.goto('https://leaftaps.com/opentaps/control/main')

    
})

test('Test Info', async () => {

test.info().annotations.push({type:"Test Info",description:" this is test info annotation"},
    {type:"Authot","description":"Arun"}
)

})

test('learn to use test.slow', async ({page}) => {
test.slow()
await page.goto('https://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill('demosalesmanager')
await page.locator('#password').fill('crmsfa')
await page.locator('.decorativeSubmit').click()
await page.locator('//a[contains(text(),"CRM")]').click()
    
})
