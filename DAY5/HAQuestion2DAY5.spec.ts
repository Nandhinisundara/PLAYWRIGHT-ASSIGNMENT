//1. Load Red Bus in an Edge browser instance and verify the page title and URL. 
//edge browser run im chromium engine  only 

import {test,chromium} from '@playwright/test';

test('Launch browser',async()=>
    {
    //creating browser
    const browser=await chromium.launch({channel: "msedge",headless:false}) //msedge headless is UI 
    //creating context
    const context=await browser.newContext()
    //creating page
    const page=await context.newPage()
    await page.goto("https://www.redbus.in/")
    await page.waitForTimeout(5000)
    console.log("Redbus Title:" + await page.title())
    console.log("Redbus URL:" + page.url())
//title() is ASYNC function  takes time to get title  from website
//await edgePage.title() wait until title is received
 //+ to join
})