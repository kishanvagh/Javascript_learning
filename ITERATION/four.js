const myObject={
    'HTML':"hyper text markup language",
    'java':"java",
    'js':"javascript",
    'cpp':"c++"
}
  
for(const key in myObject){      //as we know we can't use for-of for iterate object,then we can use for-in loop for iterate and for-in access index
    console.log(`key is the ${key} and value is ${myObject[key]}`);
}
const myArray= [1,2,3,4,5]
for (const key in myArray) {
    console.log(`index is ${key} and value is ${myArray[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for(const key in map){
    console.log(key)    // we can't iterate map using for-in loop
}