import {test} from '@playwright/test';

test.only('Launch the browser',async({page})=>
    {
    await page.goto("https://www.amazon.com/")
    await page.waitForLoadState('domcontentloaded')
    const title=await page.title()
    console.log(title)
    const url =page.url()
    console.log(url)
    await page.waitForTimeout(5000)
    
})