class BasePage{
    //method
    findElement(){
        console.log('the element is found')
    }
    clickElement(){
        console.log('the element is selected')

    }
    enterText(){
        console.log('enter the text')
    }
    performCommonTasks(){
        console.log('perform the task')
    }
}

//child class

class LoginPage extends BasePage{
    //method
    performCommonTasks(){
        console.log('list the common task')
    }
}

//create and obj and call the child will override the parent
let object=new LoginPage()
object.performCommonTasks()
object.clickElement()
object.enterText()
object.findElement()