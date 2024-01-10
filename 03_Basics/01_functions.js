
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

function addTwoNumbers(number1, number2){

     console.log(number1 + number2);
 }
const result = addTwoNumbers(3, 5)
console.log("Result: ", result);//op-Result: undefined 
//because fn is not returning anything


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
console.log("Result: ", result);//op->Result: 8
//fn is return sum


function loginUserMessage(username = "sam"){//="sam" is default value
    if(!username){
        console.log("PLease enter a username");
        //if this conditon is not applied ,
        // amd default value is not define and 
        //line no 42 runs then the op will be undefined just loggedIn
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage(""))
console.log(loginUserMessage("hitesh"))


/*+++ SHOPPING CART FN+++*/

/* In cart the parameters are ot fixed
so we used REST operator
is ...
sometimes is called rest and spread 
here they are rest  */


function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))
//op->[200, 400, 500, 2000]-->return an array and we can easily perfom any operation on this array


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))
//op->[500, 2000]->coz val1 = 200 & val2 = 400


/*++OBJECT INSIDE FUNCTION++ */

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
//OP-> Username is hitesh and price is 199

//we can directly pass object like below
handleObject({
    username: "sam",
    price: 399
})


/*++ARRAYS INSIDE FUNCTION++ */
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));//OP->400
console.log(returnSecondValue([200, 400, 500, 1000]));//another way for above thing