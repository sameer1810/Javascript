// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


 console.log("2" > 1);  //op->true
 console.log("02" > 1); //op->true
 //string convert to int

console.log(null > 0);  //op->false
console.log(null == 0); //op->false
console.log(null >= 0); //op->true
//equality check ie == and comaprison operator ie><,>=,<= works differntly
//comaprison convert null to number,=>null=0
//thwts why null>=0 true
//and bull>0 false
//NOT RECOMMENDED FOR DEVELOPERS

console.log(undefined == 0);    //op->false
console.log(undefined > 0);     //op->false
console.log(undefined < 0);     //op->false

// === 

console.log("2" === 2); //op->false
//COMPARE DATATYPE AS WELL AS VALUE