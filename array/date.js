function getdate(){
let date=new Date();
 let hour= date.getHours();

 let newdate=date.getHours()+":"+ setInterval(()=>{
    date.getSeconds();
   },[1000])
   console.log(newdate)
}