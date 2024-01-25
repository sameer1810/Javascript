//we can chnge the value of pi or not

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")//run this

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


//we can also make such object where the discritpitve property cant be changed 
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));//this guve the dicription of property

Object.defineProperty(chai, 'name', { //we can define the property of object as well
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {//if enumerable = false then loop wont work on name property
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}