/*
Overloading
Create a class TextBox and implement method overloading for fill() with the following signatures:

fill(text: string)
fill(text: string, locator: string)
Ensure a single implementation handles both cases appropriately.
*/

class TextBox{
    fill(text:string):void //signature
    fill(text:string,locator:String):void //signature

    fill(text:string,locator?:String){

    if(locator){

        console.log("the text is having " + text + "and" + locator);
        
    }else{
        console.log("text is having only" + text);
    }

    }

}

let Textnew=new TextBox()
Textnew.fill("test@gmail.com", "#email")
Textnew.fill("Hello World")
