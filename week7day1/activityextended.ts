//extended class
import  {LoginPage} from "./classactivity.js";

let obj=new LoginPage("https://www.amazon.com")
obj.Login()
obj.Logout()
console.log(obj.Url)
console.log(obj.Title)

