let a=300;
if (true) {
    let a = 10
    const b = 20
    var c=30
    console.log("INNER: ", a);
    
}
console.log("outer: ", a);
//  console.log(a);  //undefined (error that a is not defined)
// console.log(b);  //undefined (erroe that b is not definded)
// console.log(c);  //it will be printed 30 in case of var it is accessable outside the block scope

function one(){
    userName="kishan"
    function two(){
        const website="kishanPatel.in"
        console.log(`${website} is created by ${userName}`)   //here we can access username of outercope
    }
    // console.log(website)  (error website is inside the block scope of functino two())
    two()
}
one()


if(true){
    const username="kishan"
    if(username === "kishan"){
        console.log(username)
        const team="KKKINGS"
    }
    // console.log(team)  //error
}



// ++++++++++++++++++ interesting ++++++++++++++++++


// there is two way for defining the fucntion
/*
1)
 
for this we can cal this function before we intialize the function
function funName(){
   //code
}

2)
for this we call after we initialize the function defeination
const funName=function(){
   //code

}

*/

console.log(addone(5))   //this will not give any error

function addone(num){
    return num + 1
}



// addTwo(5)     //this will give error that we cannot call function before intializtion
const addTwo = function(num){
    return num + 2
}


console.log(addTwo(6))


