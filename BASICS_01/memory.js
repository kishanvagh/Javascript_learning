//stack memory

// for primitive data types there stack mamory is used (liked pass by value if we change change does not affects the original value)

let s1="kishan"
let s2=s1 //new copy of s1 is made then it will be assigned to s2 
s2="vaghasiya"  //this change will not affect the original one
console.log(s1)
console.log(s2)



//heap memory

// heap memory is generaly used for non primitive datatypes like arrays,object,function,change reflects in original one 

let myObj1={
    name:"kishan"
}
let myObj2=myObj1 //same memory reference is allocated to myObj2 of myobj1

myObj2.name="vaghasiya"  //it will affect original one also because both are sharing same memory
console.log(myObj1.name)
console.log(myObj2.name)
