// return the number of vowels in a string
function conv(str){
    let count=0
    vouels="aeiouAEIOU"
  for(i=0;i<str.length;i++){
 if(vouels.indexOf(str[i])>-1){
    count++
 }
  }
  return "no of strings are "+count
}

console.log(conv("javascript is a better programming language compare to other"))