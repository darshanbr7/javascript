let a=[1,2,3,4,5,6,7,8,4,5,6,7,8];
/*for(ele of a){
   console.log(ele)
} */
// iteration of Arrayelement through the 
let b=[];
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
           b.push(a[j])
        }
    }
}
console.log(b)
