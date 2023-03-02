class bank{
    min_bal=500;
    id;
    name;
    dep_Amount;
    constructor(a,b,c){
       this.id=a;
       this.name=b;
       this.dep_Amount=c;
    }
    create_Acc(){
        console.log(` Account opened sucessfully, with id ${this.id} and name is ${this.name} with amount of ${this.dep_Amount}`)
    }
    get_Bal(){
        console.log(`your balance is ${this.dep_Amount-this.min_bal}`)
    }
}
let a=new bank(101,"darshan",5000)
a.create_Acc();
a.get_Bal();