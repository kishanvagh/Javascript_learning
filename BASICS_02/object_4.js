// const tinderUser = new Object()   //singleton object
const tinderUser = {}   //non singleton onbject

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",       //multple object as key for outer object
            lastname: "choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3=Object.assign({},obj1,obj2,obj4);   //target , sources [obj1,obj2,obj3]
console.log(obj3)


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[0].id)
console.log(Object.keys(tinderUser));    //gives all the keys of objects
console.log(Object.values(tinderUser));  //gives all value of obeject
console.log(Object.entries(tinderUser));  //return array of [keys,values]
  
console.log(tinderUser.hasOwnProperty('isLoggedIn'));   //checks that this key exist or not

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
console.log(course.courseInstructor)
const {courseInstructor : teacher , coursename : name}=course    //de-structure object

console.log(teacher)
console.log(name)

