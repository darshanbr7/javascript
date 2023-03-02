class bank{
    constructor(name,amount){
        this.name=name;
        this.amount=amount;
    }
    saving_Acc(){
        console.log(`Account opened sucessfully ${this.name} with min bal ${this.amount}`)
    }
}
let c1=new bank("darshan",5000);
let c2=new bank("chirag",6000);



