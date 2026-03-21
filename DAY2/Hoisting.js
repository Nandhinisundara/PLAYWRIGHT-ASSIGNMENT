//Hoisting
//var,let,const

//Hoisting var
//where declaration is move to top (first print and declarion next this will happen)

//Normal first declare and printing so execute
//var a=10
//console.log(a) //o/p 10

//no declaration first so after print state the declaration move to top
//console.log(a);
//var a=10  //(var b=10)  o/p undefined var a move up so we dont know the value of a

//Hoisting let
//Normal
//let b=10
//console.log(b) //o/p 10

//There are block scoping varaible ,so declaration is must whithout declaration pring statement it will show
//error we cannot access b 

//console.log(b);
//let b=10 //o/p Cannot access 'b' before initialization

//CONST HOISTING
//same same error as before without initialization i will not acces the c

//Normal 
//we should declare constant func with variable and value in same line other wise it will show error
//const c and c=20 we cannot split and write the code in const hoisting

//const c=20
//console.log(c) //o/p 20

//Hoisting const
//TDZ temporal dead zone time period between  declaration and  value assignment
console.log(c)
const c=20 // o/p Cannot access 'c' before initialization