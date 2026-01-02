const name = "hitesh"
const repoCount = 50

// console.log(`hello my name is ${name} and my repocount is ${repoCount}`)  //this is the modern way to write 
const gameName = new String('hitesh-hc-com')  //this is another way to declare string in javascript gameName is the object of String class with such value

console.log(typeof gameName)

console.log(gameName.length)

const arr=gameName.split('-')  //this will return the array of substrings seperated via seperator

console.log(arr)

gameName.toUpperCase()
console.log(gameName.toUpperCase())
console.log(gameName)

console.log(gameName.charAt(2));  //return the char 
console.log(gameName.indexOf('t')); //return the index of the char

const newString = gameName.substring(0, 4)  //start,end   end is exclusive and start is exclusive
console.log(newString);
/*
Extracts characters from start to end - 1

❌ Does NOT support negative indices

✔️ If start > end, it automatically swaps them

Negative values are treated as 0
*/

const anotherString = gameName.slice(-2, -1)        
/* slice(start, end)

 Extracts characters from start to end - 1

Supports negative indices (counting from the end)

 Does not swap arguments if start > end
*/
console.log(anotherString);


const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))