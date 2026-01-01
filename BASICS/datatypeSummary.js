//  Primitive
// (pass by value)
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100  //number
const scoreValue = 100.3 //number

const isLoggedIn = false //boolean
const outsideTemp = null //null (type of null is object)
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  //false because same value has different ID

 const bigNumber = 3456543576654356754n  //bigInt



// Reference (Non primitive)
// (pass by reference)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //array (type of array is obeject)
let myObj = {
    name: "hitesh",    //object  (type of object is object)
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");   //function store in variable  (type of function is function)
}
console.log(typeof myFunction);  

// https://262.ecma-international.org/5.1/#sec-11.4.3