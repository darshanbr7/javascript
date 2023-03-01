let a=[1,2,3,4,5,6,7,8,4,5,6,7,8];
let b=["darshan ","Bolare"]
console.log(a.includes(1))
console.log(a.includes(10)) // 
// includes method check the element present or not
console.log(a.indexOf(8));// it returns the index of the element present in the Array
console.log(a.lastIndexOf(8)) // it returns the last indexof the element
console.log(a.splice(4,5)) // splice method recive the two parameter one is which index it start, how many element it delete
console.log(a)
console.log(a.splice(4,0,"Darshan"))  // slice with threee paameter it is used to 
console.log(a)
console.log(a.concat(b))