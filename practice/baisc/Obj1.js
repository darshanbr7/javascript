let a={
    101:"darshan",
    102:"bolare",
    103:"mandya"
}
Object.assign(a,{104:"bengalore"}) // for adding element to Obect

console.log(a)
console.log(Object.values(a).sort().reverse())
console.log(delete a[101])  // for deleting element from the Object
console.log(a)
console.log()