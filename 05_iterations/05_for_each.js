//for each loop

//for each loop on array

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
     console.log(val);
 } )
//fn inside this is callback fn and doesnt have any name


//another method
// coding.forEach( (item) => {
//     console.log(item);
// } )


//another method
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)//not running just give refernce


//for each loop store some more parameters as well apart from the element
//it carry index and arraylist with itself as well
coding.forEach( (item, index, arr)=> {
     console.log(item, index, arr);
 } )
 /*op->
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/


//object inside array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

/*
op->
javascript
java
python
*/