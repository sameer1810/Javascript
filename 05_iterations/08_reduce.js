//++  REDUCE ++

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
     console.log(`acc: ${acc} and currval: ${currval}`);
     return acc + currval
     }, 0)//O is current value

console.log(myTotal);
     //op->
     /*
     acc: 0 and currval: 1
     acc: 1 and currval: 2
     acc: 3 and currval: 3
     6
    */

     //syntacx for better understandinh
     /*
        const sum = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
        }, intial value);
     */

//using arrow funtion

const myTotal1 = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal1);//op->6,sum of all elements of array



//another examples

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
//op->22996