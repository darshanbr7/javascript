function a(name ,callback){
   
    console.log(`hello ${name}`)
    callback()
   
}
function b(){
    console.log(` this is the call back function`)
}
a("darshan",b)