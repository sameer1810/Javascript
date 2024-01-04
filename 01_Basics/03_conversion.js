let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);//->>o/p -> number
//console.log(valueInNumber);         //->o/p NaN


//if not pure number ->typ=number ,but value =NaN//
// "33" => 33
// "33abc" => NaN->not a number
// sameer ->types is number -> but value comes not a NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);->op is 1 

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber);            //value ->33
//console.log(typeof stringNumber);     //type->string





// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);   //op->-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);->2 to the power 3
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);


// console.log("1" + 2);        //op->12
// console.log(1 + "2");        //op->12
// console.log("1" + 2 + 2);    //op->122
// console.log(1 + 2 + "2");    //op->32

// console.log( (3 + 4) * 5 % 3);  ->use paranthesis fo voiding confusion

// console.log(+true);->op =1
// console.log(+"");  ->op =0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 //bad codeing practice 

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

//prefix and postfix operatore
//++c c++ diff
let a=1
let b =1
let x = a++
let y= ++b
console.log(x) //op->1
console.log(y) //op->2

