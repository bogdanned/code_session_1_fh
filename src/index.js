
var hello = "test";


// variables
// var y = 4; // old syntax
let x =1; // reasing
const z = 2; // wont change

let u; // declaration

// data types in Javascript
// 8 data types
// Strings
// Integers - Numbers
// BigInt - biiiinumbers
// Boolean
// Objects: {}
// Symbol
// undefined
// null 

// Strings:
let city ="Berlin";
let citySingle ='Berlin';

// Template Literals
let cityback=`berlin`;

let greeting = "Hello, "
let userName = "Bogdan"
let endSentence = " !"
let testFun = () => ("testing inline functions");

console.log(greeting+userName+endSentence)
// Template Literals
console.log(`Hello`+` `+`faraz`+`!`)


console.log(`Hello, ${testFun()}! Is sunny ${new Date().getFullYear()}!`)


//
console.log("Good Morning Mondays!".toLowerCase())

console.log("Good Morning Mondays!".toUpperCase())

console.log("Good Morning Mondays!".includes("Morning"))
console.log(userName[3])

let fruit = "apple";
// fruit[0] = "m"; it is not possible to modify a string 
//https://javascript.info/string#strings-are-immutable
fruit = "orange";















