// a=4, e=3 ,i=1,o=0,s=5
function a(element){
    this.element=element
    let aa=element.split("")
    let b=[]
    for(let i=0;i<aa.length;i++){
        if(aa[i]=="a"){
             b.push(4)
        }
        else if(aa[i]=="e"){
            b.push(3)
        }
        else if(aa[i]=="i"){
            b.push(1)
        }
        else if(aa[i]=="o"){
            b.push(0)
        }
        else if(aa[i]=="s"){
            b.push(5)
        }
        else{
            b.push(aa[i])
        }
    }
    let c=b.join("")
    console.log(c)
    //console.log(aa)
}
a("javascript is cool")
a("programming is fun")
a("become a coder")
