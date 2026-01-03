const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


//  marvel_heros.push(dc_heros)  //it will push dc_heros as new element of mervel_array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
  
// const allHeros = marvel_heros.concat(dc_heros)   //concat returns new array 
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]   //spreading method fo concat arrays
console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)   //converts multi dimensonal array into 1d array
console.log(real_another_array);

console.log(Array.isArray("Hitesh"))  //false 
console.log(Array.from("Hitesh")) //['H','i','t',..]
console.log(Array.from({name: "hitesh"})) // interesting  {}   //we have to say that from which means key or value we want to make an array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));