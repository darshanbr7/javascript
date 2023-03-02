class bank{
    constructor( name){
        this.name=name;
        
    }
}
class Account extends bank{
    constructor(name,amount){
        super(name)
        this.amount=amount;
        console.log(` ${name} opened account with balance ${amount}`)
        
    }

}

let b=new Account("drshan",1000)
