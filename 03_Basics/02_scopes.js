var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c =30
    // console.log("INNER: ", a);
    
}



// console.log(a);-->a=300 even if inside if it is chnage
// console.log(b);-->b will give undefined coz out of scope
// console.log(c);-->c=30-->var doesnt have any scope



