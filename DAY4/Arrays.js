//Array declaration

let numarray=[1,2,4,6,8] //array declared to variable numarray
     //index=(0,1,2,3,4)

//length of the array will use .length as aproperty to find length

console.log(numarray.length)
//o/p 5

//Index 
console.log(numarray.indexOf(4)) //element 4 in a array
//o/p 2

//adding number
console.log(numarray[5]="welcome")
console.log(numarray)
//o/p [ 1, 2, 4, 6, 8, 'welcome' ]

//replace number
console.log(numarray[2]=true) //in index 2 is 4 replaced bt true
console.log(numarray)
//o/p [ 1, 2, true, 6, 8, 'welcome' ]

//includes //it will check that particular element is there are not
console.log(numarray.includes(true))// o/p true (is there or not check it will give true as respons if not false
console.log(numarray) // o/p [ 1, 2, true, 6, 8, 'welcome' ]

//push() //add one or more element in end
console.log(numarray.push("Hello","Testleaf")) //push to end o/p 8 len of element
console.log(numarray) //o/p [ 1, 2, true, 6, 8, 'welcome', 'Hello', 'Testleaf' ]

//pop() // remove one more element in end
console.log(numarray.pop("Testleaf")) //o/p Testleaf
console.log(numarray) //o/p  [1, 2, true, 6, 8, 'welcome', 'Hello' ]

//unshift() //add one or more element in starting 
console.log(numarray.unshift("Testleaf","qeagle")) //o/p 9 (length of array)
console.log(numarray) //o/p [ 'Testleaf', 'qeagle', 1, 2, true, 6, 8, 'welcome', 'Hello' ]

//shift() //remove one or more element in start
console.log(numarray.shift())//o/p Testleaf
console.log(numarray) //o/p [ 'qeagle', 1, 2, true, 6, 8, 'welcome', 'Hello' ]

//slice() //slice portion of array
console.log(numarray.slice(4,7)) // o/p [ 6, 8, 'welcome' ] last one removed 
console.log(numarray) //o/p [ 'qeagle', 1, 2, true, 6, 8, 'welcome', 'Hello' ]
//in slice particular portion alone extracted but there is not change directly in numarray so original element will take

//split() add or remove or replace in between

console.log(numarray.splice(1,4,"Good","undefined")) //o/p[ 1, 2, true, 6 ]
console.log(numarray) //o/p [ 'qeagle', 'Good', 'undefined', 8, 'welcome', 'Hello' ]

//for of

for (let array of numarray)
    console.log(array)

/*
//o/p qeagle
Good
undefined
8
welcome
Hello
*/