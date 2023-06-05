function Authenticate(arr,str){
    let auth=false
    for(let i=0;i<arr.length;i++){
        if(arr[i]===str){
            auth=true
        }
    }
    if(auth){
        console.log("Authenticated");
    }else{
        console.log("not Authenticated");
    }

}
Authenticate(["hello","hel","user"],"user")
Authenticate(["hello","hel","user"],"user1")