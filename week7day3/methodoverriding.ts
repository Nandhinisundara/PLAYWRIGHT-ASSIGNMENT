//overriding

export class BaseTest{

    login(){
        console.log("Login with default credentails");
        
    }

import { BaseTest } from "./methodoverride.js";


class AdminTest extends BaseTest{

    login(){
        console.log("Login as Admin with admin credentials");
        super.login() //Login with default credentails
    }
}

let ad=new AdminTest()
ad.login()
}