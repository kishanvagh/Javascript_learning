const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach((item)=>{
    console.log(item)
})

coding.forEach(function(item){
  console.log(item);
})

function printMe(greet){
    console.log(`hello ${greet}`)
}
coding.forEach(printMe)     //seperate declaration of callback funtion

coding.forEach((item,index,arr)=>{
      console.log(`${index} : ${item} : ${arr}`)
})

const myArr=[  
     {  
        "ID":"363",
        "NAME":"Kishan Patel",
        "GREET":function(){
             console.log(`hello ${this.NAME}`)
         }
     },
     {
        "ID":"364",
        "NAME":"Krish Patel",
        "GREET":function(){
             console.log(`hello ${this.NAME}`)
         }
     },
     { 
        "ID":"367",
        "NAME":"Smit Patel",
        "GREET":function(){
             console.log(`hello ${this.NAME}`)
         }
     }
]

myArr.forEach((user)=>{   //user is object obj.key for access value of key in object
   user.GREET()
})
