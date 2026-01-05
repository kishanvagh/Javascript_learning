// for of  loop 

const arr=[1,2,3,4,5]
for(let num of arr){
    console.log(num)
}
const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"united states of america")
map.set('gj','gujrat')

for(const [key,value] of map){
    console.log(`key is ${key} and value is ${value}`)
}
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
for(const [key,value] of myObject){        //we can't iterate objects by for-of loop
    console.log(key,value);
}

//for-of can be used for array,string,map and directly gives value at position not index