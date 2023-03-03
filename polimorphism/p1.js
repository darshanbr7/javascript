 class animal{
    constructor(name){
        this.name=name;
    }
    eats(){
        console.log(this.name+" eats food");
    }
 }
 class cat extends animal{
    eats(){
        
        console.log(this.name+" eats food");
    }
 }
 
 let b=new cat("cat");
 b.eats()