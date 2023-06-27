let data=[{name:"bengalore"},{name:"mysore"}]

function serch(value){
data.map((ele)=>{
   
        if(ele.name.toLocaleLowerCase()===value.toLowerCase()){
            console.log(ele.name);
        }else{
            
            console.log("plase check the spelling");
        }
})

