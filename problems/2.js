let a=[1,2,3,4,5,6,1,2,3]
for( let i=0;i<a.length;i++){
   for(let j=0;j<a.length;j++){
    if(i !=j ){
        console.log(i)
        break
    }
   }
}