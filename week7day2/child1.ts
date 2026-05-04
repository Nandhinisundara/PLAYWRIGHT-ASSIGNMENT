
import { GrandParent } from "./gp.js";
//child1
import { ParentMethod } from "./parent.js";


class ChildMethod extends ParentMethod{


    createLead(){
        console.log("Lead is created");
        
    }

}
 
let ch=new ChildMethod()
ch.launchBrowser()
ch.createLead()
ch.loadUrl()
ch.loginInfo()