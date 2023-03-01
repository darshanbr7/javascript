// object creation using the 3 ways

// using object literals
let a={id:101,name:"darshan"}
console.log(a)

// object creation using new keyword
let b=new Object();
b.id=102;
b.name="raju"
console.log(b)

// using constructor
function c(id,name){
    this.id=id;
    this.name=name
}
let d=new c(103,"harshan")
console.log(d)
