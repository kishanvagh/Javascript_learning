function myltiplyBy5(num){
    return num*5
}
console.log(myltiplyBy5.power)  //undefined because myltiplyBy5() function does not have any property named power

console.log(myltiplyBy5(5)); //25

console.log(myltiplyBy5.prototype);  //{}

function createUser(username,score){
    console.log(this)//{}
    this.username=username
    console.log(this)
    this.score=score
    console.log(this)
}

const user1=new createUser("kishan",89)      //What new does internally (very important)
// // When you use new, JavaScript does 4 hidden steps:
// Creates an empty object {}

// Sets this to that empty object

// Links it to the constructor’s prototype

// Returns the object automatically
const user2=new createUser("jay",90)

console.log(typeof user1)   //object
console.log(typeof user2)   //object

// user1.increment() //undefined becaues by default function don't have any property named increment
 
createUser.prototype.increment=function(){
    this.score++;
    console.log(`${this.score}`)
    console.log(`call from ${this.username}`)
}

user1.increment()
user2.increment()
