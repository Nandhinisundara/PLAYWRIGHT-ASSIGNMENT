//string is a sequence of character
//twotypes string literal and string object

//string literal primitive datatype

let companyName="Testleaf"
let firstName="Testleaf"
console.log(companyName==firstName)

//both have different variable with same value it will be stored in same memory only value is same

//string oject

let empname=new String ("Hari")
let empname1=new String ("Hari")
console.log(empname==empname1);

//Escape sequence \,\n,\t

//let test=('it's a regression testing")//'s error as unidentifier so \ using to make it clear
    //console.log(test)

let test=('it\'s a reg\tression\ntesting')
    console.log(test);

//concat() to concat two strings

let testCase="create a lew lead"
let testCaseid=1424
let resultconcat=testCase.concat(testCaseid)
console.log(resultconcat.concat)

//using +

let resultconcat1=testCaseid+"_"+testCase+"passed"
console.log(resultconcat1)

//template literal latest way of concat and followed by `backticks`

function funName(x)
{
    console.log(`there is ${x} testcase`)
}
funName(500)