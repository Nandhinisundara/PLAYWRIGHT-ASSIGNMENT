import {test,chromium} from '@playwright/test';

test('Launch the browser',async()=>
    {
    //creating browser
    const browser=await chromium.launch({channel: "msedge",headless:false})
    //creating context
    const context=await browser.newContext()
    //creating page
    const page=await context.newPage()
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.waitForTimeout(5000)
    
})