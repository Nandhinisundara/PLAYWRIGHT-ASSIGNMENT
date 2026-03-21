//Variable decaration Using var,let,const

//Variale declaration using VAR
//take latest value and varaible that are declared with var is redeclared and reassigned

var companyname="Testleaf"
var companyname="q eagle"
console.log(companyname);

//In this adding companyname=12345 taken latest 12345 redeclared and reassigned
var companyname="Testleaf"
var companyname="q eagle"
companyname=12345
console.log(companyname);

//let
//Variable declare with let i cannot redeclare but we can reassign a value 
//let course="selenium"
//let course="playwright" in this we cannot redeclare it show blockscope error

let course="selenium"
course="playwright" //here we can reassign the value
console.log(course);

//const
//variable declare with const cannot redeclared and reassigned

const pi=3.14
pi=3.14 //exicutes in run time only it will show error

//o/p error assignment to constant variable