const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function (){
       console.log("this is run of promise 1")
       resolve()
    },1000)
})
promiseOne.then(function(){     //then and resolve are connected when resolve() is call in promises then this will executed
    console.log("promise one finally consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("this is the run of promise 2")
        resolve()
    },1000)
}).then(function(){
    console.log("this is the end of promise 2")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve({"userName":"kishanVaghasiya", "age":19})
    },1000)
})

promiseThree.then(function(data){
    console.log(data)
})

const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({"userName":"kishanVaghasiya", "age":19})
        }else{
            reject("there is an error")
        }
    },1000)
})

promiseFour.then(function(data){
    return data.userName         //this will return the username to the next then()
}).then(function(userName){
   console.log(userName)
}).catch(function(error){
    console.log(error)
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


async function consumePromiseFive(){
    try{
       const response = await promiseFive
       console.log(response);
    }catch(error){
      console.log("error:",error);
    }
}
consumePromiseFive()


// async function getAllUser(){    
//     try{
//       const response=await fetch('https://jsonplaceholder.typicode.com/users')     fetch returns a promise 
//       const data = await response.json()   //we have to write await here also,becasue here till response not comes we should not convert it into json
//       console.log(data);
//     }catch(error){
//        console.log(error)
//     }
// }

// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users').then((respone)=>{
    return respone.json();
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("this will always executed")
})

