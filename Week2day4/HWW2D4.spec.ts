import {test,expect} from '@playwright/test'

test('learn assertion',async({page})=>{
    //s1 go to url
    await page.goto('https://leafground.com/checkbox.xhtml')

    //click on check box
    await page.getByText('Basic',{exact:true}).click()
    console.log('basic checkbox is clicked')
    
    //click on notoficatio check box
    await page.locator('//span[text()="Ajax"]').click()
    //verift the displayed message
    //span[text()="Checked"]
//span[text()="Unchecked"]
//to verify meesage is displayed used visible
    await expect(page.locator('//span[text()="Checked"]')).toBeVisible()
    console.log('notify message is verified')

    //click fav lan
    await page.locator('//div[@class="ui-chkbox ui-widget"]/following-sibling::label[text()="Java"]').click()
    console.log('fav lan is selected')

    //click on tri state check isBox
    //await page.locator('//span[@class="ui-chkbox-icon ui-c ui-icon ui-icon-check"]').click()
//verifu message for tick use getbytext State = 1
    //await page.getByText('State = 1').click()
    //verfy message for cross use text State = 2
   // await page.getByText('State = 2').click()
    //verify message for empty State = 0
   // await page.getByText('State = 0').click()

   //for(let i=0;i<=2;i++)
   //{
   await page.waitForTimeout(10000)
    //if(i=0){
        await page.locator('//span[@class="ui-chkbox-icon ui-c "]/parent::div').click()//click first
        //after click change to state1 for that unique locator we are taking the txt and printing
    const Msg1=await page.locator('//div[@class="ui-growl-message"]').innerText()
    console.log(Msg1) 
    
    //}
    //else if(i=1){  button move to state2 and click the state 2 locator 
        await page.locator('//span[@class="ui-chkbox-icon ui-c ui-icon ui-icon-check"]/parent::div').click()
    const Msg2=await page.locator('//div[@class="ui-growl-message"]').innerText()
    console.log(Msg2) 
    await page.waitForTimeout(10000)
    //}
    //else if(i=2){
        await page.locator('//span[@class="ui-chkbox-icon ui-c ui-icon ui-icon-closethick"]/parent::div').click()
    const Msg3=await page.locator('//div[@class="ui-growl-message"]').innerText()
    console.log(Msg3) 

    //}
 //}

    //click on toggle button
    await page.locator('//div[@class="ui-toggleswitch-slider"]').click()
    //verify message checked
    await expect (page.getByText('Checked')).toBeVisible()
    console.log('message is verified')
    //verify the message unchecked
    //await page.getByText('Unchecked').click()

    //verify checkbox is disabled
    await expect(page.locator('//input[@aria-label="Disabled"]')).toBeDisabled()
    console.log('checkbox is disabled')


    //click on dropdown
    await page.locator('//ul[@data-label="Cities"]').click()
    //selelct mulcountries
    await page.locator('//li[@data-item-value="Miami"]/label[text()="Miami"]').click()
    await page.locator('//li[@data-item-value="London"]/label[text()="London"]').click()
    await page.locator('//li[@data-item-value="Paris"]/label[text()="Paris"]').click()
    await page.locator('//li[@data-item-value="Istanbul"]/label[text()="Istanbul"]').click()
    await page.locator('//li[@data-item-value="Berlin"]/label[text()="Berlin"]').click()
    await page.locator('//li[@data-item-value="Barcelona"]/label[text()="Barcelona"]').click()
    await page.locator('//li[@data-item-value="Rome"]/label[text()="Rome"]').click()
    //store in one variable and make a assertion
    const message=await page.locator('//li[@data-item-value="Paris"]/label[text()="Paris"]').textContent()
  //now use assertion
   expect(message).toContain('Paris')
   console.log("Paris value verified")
//div[@id="j_idt87:multiple"]

})