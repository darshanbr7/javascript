// creation of object
let a={101:"darshan",
       102: "bolare",
       103: "Mandya"
    }
    console.log(a)
    for(let ele in a){
        console.log(ele)
    }
    console.log(Object.entries(a))
    console.log(Object.isSealed())
    console.log(typeof(a))
    console.log(Object.keys(a));
    console.log(Object.values(a).sort())

    