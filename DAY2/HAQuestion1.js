//Learn to implement a JavaScript function determining whether a given number is odd or even.  
//Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the 
//number is odd and `"Even"` if the number is even.

let num=10  //declare and initialize the value to a variable step1
function isoddoreven(num){ // function is define waitin to call step2
    if(num%2==0) //step3 condition checking
    {
     console.log("It is EVEN numver") //step4 result print
    }
    else{
        console.log("It is odd number")
    }
}
isoddoreven(num) //called the function here