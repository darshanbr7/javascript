function a(c){
    setTimeout(()=>{
        console.log("data fetching after  3 second")
    },[3000])
    c()
}
function b(){
    console.log("function b")
}
a(b);
