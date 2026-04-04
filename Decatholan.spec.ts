import {test,expect} from '@playwright/test'
test('learn assertion',async({page})=>{
    //s1 launchthe browser
    await page.goto('https://www.decathlon.in/')
   //s2 verify navigated to decatholan
   //await expect(page).toHaveTitle('/Sporting Goods/')
   let Titlevalue="Buy Sporting Goods, Sportswear and Equipments | Download App"
   let expectedtitle=await page.title()
   expect(expectedtitle).toBe(Titlevalue)
   //step3  click the search 
   await page.locator('//span[text()="Search for  "]').first().click()
   //step4 verify input field is enabled
   await expect(page.locator('//input[@value="Search For 60+ Sports & 6000+ Products"]')).toBeEnabled()
   console.log('serach field is enabled')
   //step5 enter the product name
   await page.keyboard.type('shoes')
   //step 7 press enter
   await page.keyboard.press('Enter')
   //step 8 print the shoe page title
   console.log('Search | shoes')
   //verify the search shoe is verifies
   //step 9 
   await expect(page).toHaveTitle('Search | shoes')
   console.log('Serach shoe title is verified')
   //step 10 click on running 
   await page.locator('//span[contains(text(),"Running")]').click()

  //stwp 11 click on men
   await page.locator('//span[contains(text(),"Uk 10.5")]').first().click()
   //stwp 12click on size
   await page.locator('//span[contains(text(),"Men")]').click()
   //Click on the relevant
   await page.locator('//span[text()="Most Relevant"]').click()
   //click on price high to low
   await page.locator('//a[text()="Price: High to Low"]').click()
   //click first produt
   await page.locator('//div[@class="swiper-slide swiper-slide-active"]').first().click()
  //select the shoe size
  await page.locator('//div[text()="UK 10.5 - EU 45"]').click()
  //click add to cart
  await page.locator('//span[text()="ADD TO CART"]').click()
  //click the cart option
  await page.locator('//p[text()="Cart"]').click()
  //fetch the total value
  const totalValue=await page.locator('//div[@data-test-id="cart:cart-checkout-total-cart-value"]/p[text()="₹2,499"]').textContent()
  //print the console
  console.log(`The total amount is ${totalValue}`)
  ////p[@classname="font-semibold"]/following::p[text()="₹2,499"]
  ////p[@classname="font-semibold"]
  //p[text()="₹2,499"]
   //click 1t image
////span[text()="Most Relevant"]	
//span[text()="Uk 10.5 - eu 45 (2)	"]
//span[text()="Men (39)	"]

})