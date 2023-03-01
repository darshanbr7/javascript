// convert Paragraph to Every Starting letter to Upper Case
let a="today i'm going to mandya"
//console.log(a)
let b=a.split(" ")
//console.log(b)
let c=[];
for(let i=0;i<b.length;i++){
    c.push(b[i].charAt(0).toUpperCase()+b[i].slice(1,b[i].length))
}
//console.log(c)
let d=c.join(" ")
console.log(d)
