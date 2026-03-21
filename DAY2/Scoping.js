//let using scooping
/*if(true)
{
    let a=50
    console.log("value of a inside block",a)
}
console.log("value outside if block",a)
*/
//const using scooping
/*
if(true)
{
    const a=50
    console.log("value of a inside block",a)
}
console.log("value outside if block",a)
//o/p 50 outside the block printing error in outside the block only inside the block only ut will work
//a is not defined

//var

if(true)
{
    var a=50
    console.log("value of a inside block",a)
}
console.log("value outside if block",a)
//inside and outside the block we can acces 
//whereas in let and const only inside we can access 

*/
/*
function funscope(){ //acces nside and outside
if(true)
{
    var a=10
console.log("value of a inside block",a)
}
console.log("value outside if block",a)
}
funscope()

*/
/*
//let
function funscope(){ //acces nside and outside
if(true)
{
    let a=20
console.log("value of a inside block",a)
}
console.log("value outside if block",a)
}
funscope()

*/

//const
function funscope(){ //acces nside and outside
if(true)
{
    let a=30
console.log("value of a inside block",a)
}
console.log("value outside if block",a)
}
funscope()
