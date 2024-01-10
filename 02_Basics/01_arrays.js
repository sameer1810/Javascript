// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)-->push 6 at last
// myArr.push(7)
// myArr.pop()->remove the last ele from array 

// myArr.unshift(9)-->add the elel form start 
// myArr.shift()-->remove the ele from start

// console.log(myArr.includes(9));-->if array has 9 or not -->returns bool val
// console.log(myArr.indexOf(3));-->give the index of ele , if not pressnt then give -1



// const newArr = myArr.join()-->convert the array value in string

// console.log(myArr);-->op->[0,1,2,3,4,5]
// console.log( newArr);0,1,2,3,4,5-->string


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

//difff btw slice and splice
//1. slice excludes last index splice include
//2. slice doesnt make any change in original array,
//    splice spilt that values from original array.

//op from line no 31 to 41
// A [0,1,2,3,4,5]-->original arr 
// [1,2]
// B [0,1,2,3,4,5]-->original arr remains same after slice
// C [0,4,5]-->original arr split after splice
// [1,2,3]
