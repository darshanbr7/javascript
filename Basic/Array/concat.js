let a=[10,20,30,40]
let b=[50,60,70];
let c=a.concat(b)
console.log(typeof c);  // object
console.log(c);

let d=[10,20]
let e=[30,40]
let f=[50,60]
console.log(d.concat(e,f))
// concat() method combines two are more Arrays and return new Array
// it not modify the original Array