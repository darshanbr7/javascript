let arr=[1,2,3,4,5,6,6,5,4,3,2]

console.log(arr.sort())
console.log(Array.set(arr))
for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if(arr[i]==arr[j]){
            console.log(arr[i]=arr[j])
        }
    }
}
