// In JavaScript, a singleton object means:

// An object that has only ONE instance throughout the entire application.

// In simple words, only one copy of that object exists, and everyone who uses it gets the same object

// singleton
// Object.create  //this method creates signleton objects

const mySym = Symbol("key1")   //symobl
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//access from obejcts

// console.log(JsUser.email)     //general way
// console.log(JsUser["email"])   //best way
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])   //for symbols only 
JsUser.email = "hitesh@chatgpt.com"
console.log(JsUser);

Object.freeze(JsUser)   //now we can't change in obejct values;
JsUser.email = "hitesh@microsoft.com"

console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greeting();
JsUser.greetingTwo();
