const user={
    username:"kishan patel",
    salary:10000,
    welomeMassage:function(){
        console.log(this)
        console.log(`hello ${this.username}!! ,welcome to our website`)    //this refere the context object
    }
}
user.welomeMassage()
console.log(typeof user.welomeMassage)


console.log(this)  //{}

//  function chai(){
//     let username = "hitesh"
//     console.log(this)       //inside non arrow function this is not pointint to {} and also not point to username
//     console.log(this.username);   //undefined because username is insider the function and this point to object not to function
// }
// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);     
// }

// chai()


const chai=()=>{
    let username = "hitesh"
    console.log(this);   //{}    inside the arrow function this is point to {}  
}

chai()


const add=(num1,num2)=>{
    console.log(`this is with curley braces hence you have to write return statemane`)
    return num1+num2
}
console.log(add(3,4))

const add2=(num1,nums2)=>(
   // console.log(`this is with curley braces hence you have to write return statemane`)
    num1+nums2
)
console.log(add2(5,9))

const addTwo = (ob) => (ob.userName)
console.log(addTwo({
    userName:"kishan"
}))
