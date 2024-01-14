// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){},1, true

const userEmail = []//truthy value

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//chceking an arr is empty or not
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


//chceking an obj is empty or not
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {//Object.keys(emptyObj)->will return arr
    console.log("Object is empty");
}

//++++++++ Nullish Coalescing Operator (??): null undefined ++++++++++
//onlu created for null and undefined


let val1;
// val1 = 5 ?? 10 //--op->5
// val1 = null ?? 10 //-->op->10
// val1 = undefined ?? 15 //op->15
val1 = null ?? 10 ?? 20 //->op->10

console.log(val1);



// +++++  Terniary Operator  +++++
//syntax-
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")