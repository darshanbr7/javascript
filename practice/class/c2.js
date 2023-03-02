class user{
    min_bal=200;
    create_Acc(){
        console.log("Account Creacted Succesfully")
    }
    deposite_Ammount(){
        console.log(" Amount Deposited Succesfully")

    }
    withDraw_Amount(){
        console.log("Amount Withdraw Succesfully")

    }
    get_St(){
        console.log("Account  is...............")

    }
    close_Acc(){
        console.log("Account Closed Succesfully")

    }
}
let a=new user()
let b=new user()
a.create_Acc()
a.deposite_Ammount()
a.withDraw_Amount()
a.get_St()
a.close_Acc()