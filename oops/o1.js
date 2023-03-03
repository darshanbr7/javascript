class bank{
    constructor(name,amount){
        this.name=name;
        this.amount=amount;
    }
    setDetails(name,amount){
        this.name=name;
        this.amount=amount;
    }
    getName(){
        return this.name;
    }
    getAmount(){
        return this.amount;
    }
}

class SA extends bank{
    min_bal=500;
    get_bal(){
        return (this.amount-this.min_bal)
    }
}
let a=new SA();
a.setDetails("Darshan",1000);
console.log(a.get_bal())
console.log(a.getName()="raju")
console.log(a.getName())

