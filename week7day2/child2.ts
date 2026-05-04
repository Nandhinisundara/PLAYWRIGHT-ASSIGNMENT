//child2
import { GrandParent } from "./gp.js";
import { ParentMethod } from "./parent.js";

class child2 extends ParentMethod{

    createAccount(){

        console.log("Account is created");
        
    }
}

let ch2=new child2()
ch2.launchBrowser()
ch2.createAccount()
ch2.loadUrl()
ch2.loginInfo()