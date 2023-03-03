// abstraction
function abs(name,age){
this.name=name;
let sal=25000;
this.age=age
let details=function(){
    console.log(` ${name} is your age is ${age} and your salary is ${sal}`)
}
this.disply=function(){
    details()
}


}
 let a=new abs("darshan",25)
 a.disply()