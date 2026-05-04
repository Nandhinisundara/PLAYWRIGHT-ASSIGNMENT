//parent class
import { GrandParent } from "./gp.js";

export class ParentMethod extends GrandParent{

    loadUrl(){

        console.log("URL is loaded");
        
    }

    loginInfo(){
        console.log("login info is filled");
        
    }
}
let parent1=new ParentMethod()
