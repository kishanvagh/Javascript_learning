const userEmail = "kishanPatel8055@gmail.com"   

if (userEmail) {     //userEmail is considered as true   (because any string whose length > 0 is considered as true)
    console.log("Got user email");
}else {
    console.log("Don't have user email");
}

const arr=[]
if(arr){
    console.log("empty array is considered as truthy value")
}
// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN
if(null || undefined || NaN){
    console.log("this will never exectuted because any one is not truthy all are falsy")
}


if({}){
    console.log("empty object is also truthy value")
}
if(function (){}){
    console.log("empty function is also truthy value");
}

const emtyArray=[]
if(emtyArray.length==0){
    console.log("by this way we can that array is empty or not")
}
const object={}
if(Object.keys(object).length==0){    //Object.keys(object) return array of keys
    console.log("by this way we can see that object is empty or not")
}


// Nullish Coalescing Operator (??): null undefined    to prevent variable value from being null or undefined

let val1;
// val1 = 5 ?? 10     take 5
// val1 = null ?? 10     take 10 
// val1 = undefined ?? 15   take 15 
val1 = null ?? 10 ?? 20    //take 10


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")