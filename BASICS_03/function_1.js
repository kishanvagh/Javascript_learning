function sayName(name){
    console.log(`hello my name is ${name}`)
}
sayName()   //if we don't pass parameter value during call time then it will be treated as undefined
sayName("kishan")

function addTwoNumber(num1,num2){
    return num1+num2
}
const result=addTwoNumber(5,3)
console.log(result)

function loginUserMessage(name = "xyz"){//if we don't pass parameter then it wll take value as default that we have descibed
    console.log(`${name} is looged in`)
}
loginUserMessage()    //xyz is looged in

loginUserMessage(98)
  
function takeMulti(...nums){    //this is useFul when the number of parameters are dynamic
    return nums 
}

console.log(takeMulti(200,60,80,23))


//object as a parameter of function

function getIdAndName(data){
    return `name is ${data.userName} and ID is ${data.id}`
}

const data={
    userName:"KISHAN PATEL",
    id:12
}
console.log(getIdAndName(data))


//now passing array as parameter of function

const array=[20,1,50,70]
function getSecondValueOfArray(array){
    return array[1]
}   
console.log(getSecondValueOfArray(array))

