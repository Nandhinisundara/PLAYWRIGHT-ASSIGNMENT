
export class Browser{

       //property-> stores the value
       browserName:string="Chrome"
       browserVersion:number

       //methods-> for actionables
       launchBrowser(){
       console.log("Launch the browser");

}

       loadUrl(){
       console.log("Loading the URL");

}
//default constructor
//when constructor without calling it print default and print first constructor name only we need to use
/* constructor(){ 
console.log("this is a default constructor");

} */


//parameterized constructor
constructor(browserVersion:number){
this.browserVersion=browserVersion
}


}


//creating the object (let obj=new classname())
//let is blockscope so creating outside the class

let Br=new Browser(123) //if i use constructor argument ned pause or normally without costurctor normally using property it printed
Br.launchBrowser()
Br.loadUrl()
console.log(Br.browserName);//property storing value so put in console 
console.log(Br.browserVersion); 