//for in loop
//we can iterate over object through for in

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(key);//op->give all key
    //console.log(myObject[key]);//op->give all value
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}


//for in loop on arrays
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key);//op->gives index
    //console.log(programming[key]);//op->gives element
}


//for in loop on map
//map is not iterable through for in loop


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

