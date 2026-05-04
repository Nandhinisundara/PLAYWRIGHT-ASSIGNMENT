class WebComponent{
    // A constructor that initializes a `selector` property
    //property
    selector:string
    constructor(selectName:string){
    this.selector=selectName
    console.log(this.selector)
    }
    //method
    click()
    {
        console.log('simulating a click')
    }
    focus()
    {
        console.log('simulating focusing on the component')
    }

    
}

class Button extends WebComponent{
    //method
    click(){
       console.log('specific to buttons') 
    }
}

class TextInput extends WebComponent{
    //property
    value:string=''
    enterText(text: string){
        this.value=text
        console.log(this.value)
        console.log('simulating text entry')
    }
}
function testComponents(){
//object
let clickobj=new WebComponent('#loginName')
clickobj.click()
let buttonobj=new Button('password')
buttonobj.click()
let txtobj=new TextInput('#username')
txtobj.enterText('Nandhini')


}
testComponents()

