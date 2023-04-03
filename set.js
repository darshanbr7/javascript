let a=[10,11,12,13,14,11,12 ,11,12]
let s=new Set(a)
let c=[]
for(let i=0;i<a.length;i++){
    if(a[i]!=s[i]){
        c.push(a[i])
    }
    
}
 /* let b=a.filter((ele)=>{
    if(s.has(ele)){
        s.delete(ele)
        console.log(ele +" in if condition")
    }else{
        return ele
      
    }
}) 
 */
/* console.log(s)  */
console.log(c) 
