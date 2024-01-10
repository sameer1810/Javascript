const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)// push dc heroes as an element in marvel heroes

console.log(marvel_heros);//op->[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]);//--op->flash

const allHeros = marvel_heros.concat(dc_heros)//op->[ 'thor', 'Ironman', 'spiderman','superman', 'flash', 'batman' ] 
console.log(allHeros);
//concta creates new array
//doesnt make chnge in original arr
//push makes change in ooriginl arr

//sprread is same as concat
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);//op->[ 'thor', 'Ironman', 'spiderman','superman', 'flash', 'batman' ] 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
/*op->[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]*/



console.log(Array.isArray("Hitesh"))//op->false
console.log(Array.from("Hitesh"))//op->[ 'H', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name: "hitesh"})) 
//op->[]-->coz we didnt didnt define key ka array chiye ya value ka or ye object hai

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
//op->[ 100, 200, 300 ]