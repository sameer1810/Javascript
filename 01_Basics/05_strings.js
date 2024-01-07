const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");-->bad way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')//->another way of initializing string
//string is an object, have its own method.


// console.log(gameName[0]);->op=h
// console.log(gameName.__proto__);->op={}


// console.log(gameName.length);->op=13
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));//->op=t
console.log(gameName.indexOf('t'));//->op=2

const newString = gameName.substring(0, 4)//doesnt consider negativer value if given treat them as 0
console.log(newString);//->op=hite

const game = new String('hitesh-hc')
const anotherString = game.slice(-8, 4)//can give negative value->cpunt start from back 
console.log(anotherString);//->op=ite

const newStringOne = "   hitesh    "
console.log(newStringOne);//op->   hitesh    
console.log(newStringOne.trim());//op->hitesh-->removes end and start spaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))//op-<https://hitesh.com/hitesh-choudhary-->%20 is replaced by -

console.log(url.includes('sundar'))//op->false-->sundar is not present in url string

console.log(gameName.split('-'));//convert string into array on the basis of - 
//op-> ['hitesh', 'hc' ,'com']
//we can also done it on the basis of spaces we have onlye to use ' ' in place of '-'
