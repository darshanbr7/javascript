let a=[]
let Create=(ele)=>{
return new Promise((resolve,reject)=>{
setTimeout(()=>{
    a.push(ele)? resolve():reject()
},3000)

})

}
let  Update=()=>{
   console.log(" updated successfully")
}
Create(10).then(()=>{
          Update()
          console.log(a)
          })
            .catch(()=>{
        console.log("failed to update")
            })
            
            