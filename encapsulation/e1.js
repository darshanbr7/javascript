function emp(name){
this.name=name;
}
emp.prototype.setName=function(name){
 this.name=name;
}
emp.prototype.getName=function(){
   // console.log(` name is :${this.name}`)
    return this.name;
}
let a=new emp()
a.setName("darshan");
console.log(a.getName())
