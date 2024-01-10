const score =400;
console.log(score);//0p->400

const bal = new Number(100);
console.log(bal);//op->Number {100}
//both are number but second way specificallt defining it as a number.
//having its own method as string.

console.log(bal.toString().length);//making it string-->and then using length method of string

//**toFixed() method of number**//

let number = 123.456789;
let formattedNumber = number.toFixed(2);

console.log(formattedNumber); // Output: "123.46"
//toFixed(2) specifies that the number should have two digits after the decimal point. 
//The method rounds the number to the specified decimal places and returns it as a string.


//**toPrecision() method of number**//

let num = 123.456789;
console.log(num.toPrecision(4)); // Output: "123.5"
//toPrecision(4) specifies that the number should be formatted to have four significant digits. 
//The method returns a string representation of the number with the specified precision.

let num1 = 123.456789;
console.log(num1.toPrecision(3)); // Output: "123"
//toPrecision(3): Formats the number to have three significant digits, rounding as needed.
// In this case, it returns "123" since the first three digits are 1, 2, and 3.

let num2 = 123.456789;
console.log(num2.toPrecision(2)); // Output: "1.2e+2"
//toPrecision(2): Specifies two significant digits.
// This returns the number in exponential notation ("1.2e+2") since it rounds the number to 1.2 multiplied by 10^2 (100).


let num2 = 123.456789;
console.log(num2.toPrecision(2)); // Output: "1.2e+2"
//toPrecision(1): Requests one significant digit. 
//It returns the number in exponential notation ("1e+2"), representing 1 multiplied by 10^2 (100), providing only one significant digit as specified.



//**toLocaleString **//
const hundreds = 1000000
console.log(hundreds.toLocaleStrings('en-IN'));//op->10,00,000
//The toLocaleString() method in JavaScript is used to format a number into a string using the local language conventions.
// It's especially useful for displaying numbers with commas as thousands separators and period or comma as decimal separators based on the user's locale.


/////++++++++++++++++++ MATHS LIBRARY +++++++///////////////

 console.log(Math);
console.log(Math.abs(-4));//op->
console.log(Math.round(4.6));//op->5
console.log(Math.ceil(4.2));//op->5
 console.log(Math.floor(4.9));//op->4
 console.log(Math.min(4, 3, 6, 8));//op->3, minimum among them
 console.log(Math.max(4, 3, 6, 8));//op->8, maximum among them



 console.log(Math.random());//randome alwasy gives value between 0 and 1
console.log((Math.random()*10) + 1);//multiply it by 10 to take value between 1-9 and adding plus 1 for handling 0 case
console.log(Math.floor(Math.random()*10) + 1);//doing floor to get whole number


//we want valie between 10 and 20
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//random generates 0-1 value
//max-min+1 ensure number generated falls btw specified range
//floor ensure no to be whole number
//+ min ensure that no should be gretaer than minimun value.


//another way
//Math.ceil(Math.random() * (max - min + 1)) - max
//same explantion



