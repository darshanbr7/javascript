// Acecpet the String and count dupliucate character
let a="darshan"
let b=a.split("");
let sum=0;
for(let i=0;i<b.length;i++){
    for(let j=i+1;j<b.length;j++){
        if(b[i]==b[j]){
            sum=sum+1;
            console.log(b[j])

        }
    }
}
console.log(sum)