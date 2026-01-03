const myArr = [0, 1, 2, 3, 4, 5]    //first way to declare array
const myHeors = ["shaktiman", "naagraj"]     //in single array we can have multiple datatypes value

const myArr2 = new Array(1, 2, 3, 4) //second way to declare array
// console.log(myArr[1]);

// console.log("my array:",myArr)
// Array methods

//  myArr.push(6)  //insert element from back
//  myArr.push(7)
//  myArr.pop()  //remove elements from back

//  console.log("my array after operations:",myArr)

 
// myArr.unshift(9)   //insert elemnet from front
// myArr.shift()       //remove element from front

//  console.log(myArr.includes(9));   //returns boolean value that element is present in array or not
// console.log(myArr.indexOf(3));    //return the index of perticular element from array if not present then return index -1;

//  const newArr = myArr.join()
//  console.log(newArr.length)   //converts array into the string 

 console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log("slice array:",myn1)
console.log(myArr)   //my array will remain unchagned and slice (start,end-1)

console.log("B",myArr)
const myn2=myArr.splice(1,3)
console.log("splice Array",myn2)   //start to end  not end-1
console.log("after splice original array:",myArr)   //change the original array


