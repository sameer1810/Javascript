//+++++FILTER+++++

//as for each doen't retun any value
//we use filter
//filter return the value based on condiiton

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 const newNums = myNums.filter( (num) => {
     return num > 4
} )

console.log(newNums);
//op->[5,6,7,8,9,10]


//if we want to do same thing with for each 
//we have to take one data structure to hold the value
// as for each doesn't retun any val

const newNums1 = []

 myNums.forEach( (num) => {
     if (num > 4) {
         newNums.push(num)
     }
 } )
console.log(newNums1);
//op->[5,6,7,8,9,10]



//some more examples on filters

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

  console.log(userBooks);