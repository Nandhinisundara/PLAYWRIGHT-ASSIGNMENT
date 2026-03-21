//Learn to categorize a number as positive, negative, or zero using conditional statements in JavaScript. 
//imp
// number is positive, negative, or zero and 
// returns a corresponding string indicating the type. (this is keyword to unders we need to return the string to call function so it will catches the return value)
//normal code use console in return string is this type



let num=-5 // STEP1 :declaring a variable to value
function positiveorNegative(num) //STEP2:defining a function and num is parameter
{
    if(num>0) //step3 check the condition
    {
        return "Positive" //step 4 return string (send back to calling line)
    }
else if(num<0)
{
    return "Negative"    //return string
}
else
{
    return "Zero"
}
}
let result=positiveorNegative(num)// step5 let result catches the return value
//step 3 calling the function
console.log(result)  // step 6 print 