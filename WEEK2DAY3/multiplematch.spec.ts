import {test} from "@playwright/test"

test('login to leaftap',async({page})=>{
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('input').first().fill('demosalesmanager')
    await page.locator('input').nth(1).fill('crmsfa')
    await page.locator('input').last().click()
    await page.locator('text=CRM/SFA')
})

//in this we input have threee match we use nth() first() last() 