/*
1st Child file
Create class Chrome 
Create 1 method launchBrowser
create object for Chrome

*/

import { Browser } from "./classinheritanceparent.js";


 class Chrome extends Browser{


    launchBrowser(){
        console.log("chrome launchBrowser is created");
        
    }

}
 
let chromeobj=new Chrome()
chromeobj.launchBrowser()
chromeobj.browserType()
chromeobj.browserVersion()
