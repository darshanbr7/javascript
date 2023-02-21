/*Array  -> Array is a collection of heterogenious element has a one entity whre duplicatrs Are allowed

Creation of Array
 ex  let a=[];  */
 let a=[];
 console.log(a)  // it retrnss empty Array
 // Adding element to the Array
  console.log(a.shift())  // when Array is empty it returns undefined;
  a.unshift("DArshan");
  console.log(a)
  a.push("RAju")
  a.push("HArshan");
  a.push("hello")
  console.log(a)

  // unsift()-> this method is add the element at the beginig of the array
  // push()-> this method is helps to add the elemenet At the endof the Array

  // removing element from tr Array
  console.log(a.pop())
  console.log(a.shift())
console.log(a)

// pop() -> this method removes the element at the End of the Array
// shift() -> this method emoves the element at the begining of the Array.

// others method of the Array
console.log(a.toString())
console.log(typeof(a))  //type is object
console.log(typeof(a.toString())) // type is String

// iteration of the Aray
let b=[1,2,3,4,5,6,7,8,9,0];
// using for-loop
// For Assigning order
for(let i=0;i<b.length;i++){
    console.log(b[i])
}
console.log(" in decrement order")
// iteration  of in the decrement order
for( let i=b.length-1;i>=0;i--){
    console.log(b[i])
}
console.log(" iteration through , while loop")
let i=0;
while(i<b.length){
    console.log(b[i])
    i++;
}

console.log(" iteration using do-while loop")
let j=0;
do{
    console.log(b[j])
    j++;
}while(j<b.length)