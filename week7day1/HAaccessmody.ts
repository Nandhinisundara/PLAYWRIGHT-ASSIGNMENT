class LoginTest {
    public browserName:string="Chrome"
    private password:string="admin123"
    protected userName:string="tester"

    //method
    public openApplication(){
        console.log(`the details are ${this.browserName}:${this.password}:${this.userName}`)

    }

    //creating public method to acces private and protected
    public login(){
    console.log("the password is :"+ this.password)
    console.log("the password is :"+ this.userName)


    }
}
    //creating a object but we can access only public
    let details=new LoginTest()
    details.openApplication()
    details.login()
    /*
    Step 4: Practice Questions
1. Why can public be accessed outside class?
public can access everywhere inside and outside the class so no restriction
2. Why private cannot be called outside?
private can be used only within a class no access outside the class to access that create public method and access that private inside then create a object and use it
3. Where is protected commonly used?
protected can be used inside a child classs through inheritance
*/
