abstract class WrapperMethod{

    //implemented methods
    ClickElement(){

        console.log("Launch the browser and load the url");
        
    }

    Alertpage(){

        console.log("Handle all the alerts in the page");
        
    }

    //unimplemented method
    
    abstract snap():void
    abstract video():void
}

//let ab=new WrapperMethod()  // (object can not be created for abstract class)

class run extends WrapperMethod{

    snap(){

        console.log("capture the snap");
        
    }

    video(){
        console.log("record the video");
        
    }
        
    }
let r=new run()
r.Alertpage()
r.ClickElement()
r.snap()
r.video()