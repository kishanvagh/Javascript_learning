const myNums = [1, 2, 3]

const myTotal=myNums.reduce((acc,value)=>{
    console.log(`acc : ${acc} and value :${value}`)
    return acc+value
},0)   //initial value of acc

console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total=shoppingCart.reduce((acc,item)=>{  //item is object hence for access price we use item.price and it into acc (acc + item.price)
     return acc+item.price
},0)

console.log(total)
