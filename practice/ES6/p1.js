
let elemnts=[{id:101,name:"darshan"},{id:102,name:"chirag"}]
function a(data){
    return new Promise((resolve,reject)=>{
            elemnts.push(data) ?resolve():reject()
    })
}

function b(){
setTimeout(()=>{
    rows=""
for(let ele of elemnts){
  rows= rows+`<tr><td>${ele.id}</td><td>${ele.name}</td></tr>`
  document.getElementById("table").innerHTML=rows
 }
},3000)

}
a({id:103,name:"muni"}).then(()=>{
b()
// console.log("successfully inserted")
}).catch(()=>{
alert("failed")
})
