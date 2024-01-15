//+++ MAP +++
//return value same as filter

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})


//chaining in map
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)//here value of num is 10,20,30 etc
                .filter( (num) => num >= 40)//here value of num is 11,21,31etc 

console.log(newNums);
//op->[41,51,61,71,81,91,101]
