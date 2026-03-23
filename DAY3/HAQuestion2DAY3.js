//Learn how to manipulate strings and use looping statements in a programming language to solve practical 
//problems.

//Given a string s consisting of words and spaces, return the length of the last word in the string. 
//Example 1: 
/*
Input: s = "Hello World"
Output: 5 
Explanation: The last word is "World" with length 5. 
Example 2:  
Input: s = "   fly me   to   the moon  " 
Output: 4 
Explanation: The last word is "moon" with length 4. 
Example 3:  
Write a function to check if two strings are anagrams. 
 Input: isAnagram('listen', 'silent') 
 Output: true 
 Input: isAnagram('hello', 'world')  
 Output: false 
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.

 */

 //1.Split the string into an array of words. 

let Str="Hello World" 

//by using split we are spearating the each character
let arr=Str.split(" ")
console.log(arr)
//o/p ['Hello','World'] spliting each word in array

//2.Find the last word in the array.

// to find last word in an array lenght -1 if we do last index will come
//first need how many words and index is there 
//length =2
//index=1
let lastword=arr[arr.length-1]

console.log(lastword)

// o/p World

//3. Calculate the length of this word.

let lengthofword=lastword.length
console.log(lengthofword)

//o/p 5

//Input: s = "   fly me   to   the moon  " 
S2= "   fly me   to   the moon  " 
//1. Trim the String

let trimword=S2.trim()
console.log(trimword)
//o/p fly me   to   the moon  space before and after reduced

//2. Split the String into Words

let Stringintoword=trimword.split(" ")
console.log(Stringintoword)
/*
//o/p
[
  'fly', 'me',  '',
  '',    'to',  '',
  '',    'the', 'moon'
]
*/

//3. Identify the Last Word 

Stringintoword=[
  'fly', 'me',  '',
  '',    'to',  '',
  '',    'the', 'moon'
]

let lastwordinstr=Stringintoword[Stringintoword.length-1]
console.log(lastwordinstr)

//o/p moon 

//4. Calculate the Length of the Last Word 

let lenoflast=lastwordinstr.length
console.log(lenoflast)
//o/p 4

//5. Return the length


console.log("Length of last word:" +lenoflast)

//o/p Length of last word:4

