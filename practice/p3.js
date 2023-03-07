class UA{
    constructor(){
    }   
}
class client extends UA{
    constructor(Uname,Upass){
        super();
        this.Uname=Uname;
        this.Upass=Upass;
    }
    details=function(){
        console.log(` username : ${this.Uname} and password : ${this.Upass}`);
    }
     login(Rname,Rpass){
         Rname=Rname;
        Rpass=Rpass;
        if(this.Uname==Rname&&this.Upass==Rpass){
          console.log("login sucessfull")
        } else{
          console.log("login failed")
        }
    }
    chage_password(Cpass){
         this.Upass=Cpass
         console.log("Password change sucessfully !!")
    }
}
let a=new client("darshan",1234);
//a.details()
a.login("darshan",1234)
a.chage_password(12345)
a.login("darshan",12345)
console.log(a.Upass="112")
