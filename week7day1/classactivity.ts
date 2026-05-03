/*
classroom 1:


Create class as LoginPage
property as Url with parameterized data,Title with a value
methods as Login() and Logout()
create the Parameterized constructor (Url:string)
create object inside the same file and execute 


Create another file and call the LoginPage.
LoginPage class is a blueprint — 
loginObj is the actual object created from it — 
constructor sets the Url — 
methods perform actions — 
properties store value
*/


export class LoginPage{
//property-> stores the value
Url:string  //parameterized get value from constructor
Title:string="welcome to login page" 

//parameterized constructor
constructor(Url:string){
this.Url=Url
}
//methods-> for actionables
Login(){
console.log("Login to this page");

}
Logout(){
console.log("Logout from this page");

}
}

//creating the object (let obj=new classname())

let loginObj = new LoginPage("https://www.amazon.com")
loginObj.Login()
loginObj.Logout()
console.log(loginObj.Url);
console.log(loginObj.Title); 