let a=["darshan","raju","bolare"]
let b=[]
for(let i=0;i<a.length;i++){
  b.push(  a[i].charAt(0).toUpperCase()+a[i].slice(1,a[i].length))
}
console.log(a)
console.log(b)