// primitive datatyes
//call by value
//7 types : string, number, boolean,null, undefined, symbol, bigint

const score =100
const scorevalue =100.3

const logging = false
const temp = null
let userEmail;

//symbols=>
//It's a primitive data type used to create unique identifiers.
// Unlike other primitive data types like strings or numbers,
// symbols are unique and immutable, providing a way to create private object properties 
//or unique keys in JavaScript objects.

//To create a symbol, you can use the Symbol() function:

const mySymbol = Symbol();

//You can also provide a description (which is optional) when creating a symbol:
const mySymbol = Symbol('description');

//One of the main characteristics of symbols is their uniqueness.
// Even if two symbols have the same description, they are still different:

const symbol1 = Symbol('key');
const symbol2 = Symbol('key');

console.log(symbol1 === symbol2); // Output: false

const bigNumber = 1236554789664n //->n becomes bigInt



//Reference //
// non - primitive
//Array,object, funtions.

//arrays
const fav = ["virat", "rohit", "shami"];

//object
let favplayer = {
    name:"rohit"
    age:36,
}

//function
const myfunc = function (){
    comsole.log("my funct");
}

//dattype return when using typeof function

console.log(typeof 42); // Output: "number"
console.log(typeof 'Hello'); // Output: "string"
console.log(typeof true); // Output: "boolean"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null); // Output: "object" (Note: This is an oddity in JavaScript, null is actually of type "object" according to typeof)
console.log(typeof {}); // Output: "object"
console.log(typeof []); // Output: "object" (Note: Arrays are of type "object" in JavaScript)
console.log(typeof function () {}); // Output: "function"-->also can say function(object)
console.log(typeof Symbol('symbol')); // Output: "symbol" (in ES6 and later)
console.log(typeof BigInt(123)); // Output: "bigint" (in ES11 and later)


//NOTE->
//JavaScript is considered a dynamic typing language. 
//In JavaScript, variables can hold values of any data type, 
//and their types can change during the execution of a program. 

