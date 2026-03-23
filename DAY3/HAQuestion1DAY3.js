//Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
//`runTests` with `switch` for test type messages.

//Create two functions : launchBrowser, runTests where, 
   // a) launchBrowser need to take input as browserName (string) and do not return any
//use if-else (chrome or otherwise) 

   //b) runTests need to take input as testType (string) and do not return any  
   //use switch case (smoke, sanity, regression, default (smoke))

   //using if else
    //function is launchBrowser 
   //input is browserName as a parameter that is variale
   //first declaring variable to value and then creating funvtiom
    let browserName="chrome"
    function launchBrowser(browserName)
    {
      if(browserName=="chrome")
        {
            console.log("chrome")
        }

        else{
            console.log("other browser")
        }
    }
    launchBrowser(browserName)
  

    //using switch case
    //function is runTest
    //input as a parameter is testType
    //use switch case (smoke, sanity, regression, default (smoke))

let testType="smoke"
function runTests(testType){
    switch(testType)
    {
    case "smoke":
    console.log("smoke")
    break;
    case "sanity":
    console.log("sanity")
    break;
       case "regression":
    console.log("regression")
    break;
default:
    console.log("smoke")
    }
}
runTests(testType)

//camelcase
//string
//colon in case
//function call