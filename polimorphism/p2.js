class animal{
 constructor(name){
    this.name=name;
 }
 eats(){
    let age=20;
    this.lifetime=function(){
        console.log(`${this.name}  only lives ${age} ages.`)
    }
 }
}
class cat extends animal{
    constructor(name){
        super(name);
    }
    eats(){
        let age=15;
        this.lifetime=function(){
            console.log(`${this.name}  only lives ${age} ages.`)
        }
       
     }

}
let a=new cat("cat")
let b=new animal("dog")

// a.eats()
// b.eats()
a.lifetime()
b.lifetime()
