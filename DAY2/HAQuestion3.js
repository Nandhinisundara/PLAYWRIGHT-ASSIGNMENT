//Write a JavaScript program to observe how the same variable name behaves: 
// in *global scope*, 
//inside a *function*, and 
//inside an *if-block* using both var and let. 

//important to solve
//global scope (access every where)
//function scope (inside and outside the function)
//block scope(inside the block)
//let inside the block
//var inside and outside the block

let genderType="female" //variable declre with value store in globalscope
function printGender(){  // define func store in function scope 
    let funColour="brown"  //creating variable inside function
    if (genderType.startsWith("female")){  //blockscope
    var age=30  //variable inside block
    let blockColour="pink"
    console.log(blockColour)
    }
    console.log(age)
}
printGender()  //after function call condition execute and print
console.log(genderType) 
//o/p pink,30,female

//Imp to know usig let we cannot redeclare again using same varible
/*
let genderType="male" //variable declre with value store in globalscope
function printGender(){  // define func store in function scope 
    let funColour="brown"  //creating variable inside function
    if (genderType.startsWith("female")){  //blockscope
    var age=30  //variable inside block
    let blockColour="pink"
    console.log(blockColour)
    }
    console.log(age)
}
printGender()  //after function call condition execute and print
console.log(genderType) 

//o/p undefined ,male

*/