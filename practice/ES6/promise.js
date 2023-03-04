let x=[]
let a=()=>{
    return new Promise((resolve,reject)=>{
        10>11 ?resolve():reject()
    })
}
a().then(()=>{
    console.log("login Sucessfully")
})
   .catch(()=>{
    console.log("login failed")
   })