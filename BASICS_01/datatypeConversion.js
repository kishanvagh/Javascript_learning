//INTO NUMBER CONVERSION
let s="33"
let a=Number(s)
// console.log(a) //33
// console.log(typeof a) //number datatype (string is conversted into number datatype)
 
let b=Number("33abc") //NaN (Not a number)
//console.log(b)  
 
let c=Number(false)
// console.log(c) //o for false ,1 for true

let d=Number("")
// console.log(d)  //empty string converted into number 0

let e=Number("XYZ")
// console.log(e)   //Nan

let n=Number(null)
// console.log(n)  //Null value is treated as zero in number datatype

//INTO BOOLEAN CONVERSION

let f=Boolean(1)
// console.log(f) //true  (0 will conversted into false)
 
let g=Boolean("")
// console.log(g) //empty string will converted into false

let h=Boolean("Kishan")
// console.log(h) //nonempty string will converted into true

let i=Boolean(999)
// console.log(i) //non zero number are treated as true in boolean datatype

let j=Boolean(null)
// console.log(j)  //null value is treated as false in boolean datatype

//INTO STRING CONVERSION

let k=String(33)
console.log(k)

let l=String(null)
console.log(typeof l) //null is converted as into null(string) string datatype

let m=String(undefined)
console.log(typeof m)  //undefined is also converted as undefined(string) into string



