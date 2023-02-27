class Bank{
    min_Bal=500;
    create_Account(name,Acc_type){
     this.Name=name;
     this.Acc_type=Acc_type;
    }
    Get_Account(){
        
    }
}
let c1=new Bank();
c1.create_Account("Darshan","SA");
console.log(c1.Name)
console.log(c1.Acc_type)
console.log(Bank.Name)