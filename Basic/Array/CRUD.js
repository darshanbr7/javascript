let a=[10,20,30]
a.push(30,40)
console.log(a);
// push () it adds the one or more element to the end of an array

console.log(a.pop());
console.log(a);
 // pop() this method removes the last elemnet of the array and return it

a.unshift(10,20)
console.log(a);
//a.unshift() this method add the elemenet to end of an array aand return the new length of the array

// shift()
console.log(a.shift());
//shift() this method removes the element from the begining of the  array and return it
let b=[]
console.log(b.unshift()); // when no elemenet to remove in Array it return 0
console.log(b.pop());  // when there is no elemnet to remove in the pop method ut retuen undefined