//ARRAY SPECIFIC LOOPS

// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")//CANT ADD-->only contain unique value

// console.log(map);


//for of loop on map
for (const key of map) {
    //console.log(key);
}
//op->
/*[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
*/


//correct way
for (const [key, value] of map) {
    //console.log(key, ':-', value);
}
/*op->
IN :- India
USA :- United States of America
Fr :- France
*/


//for of loop on object
//not iterable through for of

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value); //op->myobject is not iterable
 }

