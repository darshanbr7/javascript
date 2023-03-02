class Account{
    constructor(name, amount){
      this.name=name;
      this.amount=amount;
    }
    create_Acc(){
        console.log("Account  Created Sucessfully "+this.name)
    }
    dep_Amount(){
        console.log(this.name+"  "+this.amount+" is deposited sucessfully")
    }
    get_St(){
        console.log(` ${this.name} is deposited ${this.amount} `)
    }

}
class SA extends Account{
    min_bal=500;
    constructor(name,amount){
        super(name,amount)
    }
    get_Bal(){
        console.log(`${this.name} your balance is ${this.amount-this.min_bal}.`)
    }
   
}
class CA extends Account{
   min_bal=2000;
   constructor(name,amount){
     super(name,amount)
   }
  get_Bal(){
     console.log(`${this.name} your balance is ${this.amount-this.min_bal}.`)
  }
}

let a=new SA("darshan",10000);
let b=new SA("chirag",10000);
a.create_Acc()
a.dep_Amount()
a. get_Bal()
b.create_Acc()
b.dep_Amount()
b. get_Bal()



