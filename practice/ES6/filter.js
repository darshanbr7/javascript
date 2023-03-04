let a=[1,2,3,4,5]
a.filter((ele)=>{
console.log(ele>1)
})
/* filter() introduced in ES6 
in this method we pass a fatArrow funcrtion as a argument 
and it check the condition with the evevry element and return boolian value
*/


//
let b=[1,2,3,4,5,6]
let c=[]
b.filter((ele)=>{
    if(ele%2==0){
        c.push(ele)
    }
})
console.log(c)