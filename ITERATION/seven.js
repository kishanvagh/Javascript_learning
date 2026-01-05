const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum=myNumers.map((nums)=>nums+1)     //map also return values but it does not returns value based on consdition like filter >4 etc..
console.log(newNum)

//chaining

const newNum1=myNumers.map((num)=>{
    return num*10    // 10,20,30
}).map((num)=>{
    return num+1    //11,21,31,...
}).filter((num)=>{
    return num>40  //check conditinal statement by filter and it filter number by conidition
})
console.log(newNum1)
