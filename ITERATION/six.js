const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    //console.log(item);
    return item                  
} )
console.log(values)  //undefined because for-Each do not return any value 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum=myNums.filter((num)=>{
    return num >4        //filter returns value with conditon
})
console.log(newNum)


let arr=[]
myNums.forEach((num)=>{        //same work that was done by myNums.filter()
    if(num >4)arr.push(num)
})
console.log(arr)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const HistoryBook=books.filter((bk)=>{
    return bk.genre==='History'
})
console.log(HistoryBook)

    