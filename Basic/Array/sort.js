let a=[10,30,0,40,88]
/* console.log(a);
console.log(a.sort());
console.log(a.reverse()); */
// sort() this method arrange the element in the increment format 
// reverse() this method arrange the element in the decrement format 

// without using inbuilt method sorting an array
for(let i=0;i<a.length;i++){
  for (let j=i+1;j<a.length;j++){
    if(a[i]>a[j]){
        temp=a[i]
        a[i]=a[j]
        a[j]=temp
    }
  }
}
console.log(a);
for(let i=0;i<a.length;i++){
    for (let j=i+1;j<a.length;j++){
      if(a[i]<a[j]){
          temp=a[i]
          a[i]=a[j]
          a[j]=temp
      }
    }
  }
  console.log(a);

