let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
 
Object.prototype.hitesh=function(){     // we are adding prototype hitesh() in all obejct,means when we create new object then all objects have by default propety hitesh(),according to diagram array,functions,string,are child of object hence they all have this property also by dafault
    console.log(`hitesh is present in all objects`);
}


// myHeros.hitesh()  //this is also presents in array

Array.prototype.arrayHitesh=function(){
    console.log(`this is the array prototype`)
}

// myHeros.arrayHitesh()
// heroPower.arrayHitesh()  //object don't have array prototypes accces;


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport    //now TASuppoer object have access of all property of  TeachingSupport
}

// console.log(TASupport.isAvailable)     //false
Teacher.__proto__ = User  //this is also one syntax

console.log(Teacher.name)   //chai

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(TeachingSupport.makeVideo) //true



let anotherUsername = "ChaiAurCode     " 

String.prototype.trueLength=function(){    //all strings have access of trueLength() by default
    console.log(this);    //chaiAurCode,hitesh
    return this.trim().length
}

console.log(anotherUsername.trueLength())
console.log("hitesh".trueLength())




// Proof with example
let a = "hello"
let b = new String("hello")     //b is object because new always returns a obejct 

console.log(typeof a) // "string"
console.log(typeof b) // "object"

console.log(a === b)  // false ❌
console.log(a == b)   // true  (value comparison)