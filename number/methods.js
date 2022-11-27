let a=122276
console.log(Number.isFinite(a))

// is finate
console.log(Number.isInteger(a))
console.log(Number.isInteger("0"))

//parseFloat
let b="10"
console.log(typeof(Number.parseFloat(b)))
console.log(typeof(b))
// it is used to convort to string to floting number

// parse int
let c="10"
console.log(Number.parseInt(c))
console.log(typeof(c))
console.log(typeof(Number.parseInt(c)))
// it is used to convert string to integer number

//is expnential
let d=145326
console.log(a.toExponential())
// it is used to convert to the exponential 

// tofixed 
let e=2325461.36899
console.log(e.toFixed())
// it is used to get the exat number after decimal point

//to precesion
let f=383.90897
console.log(f.toPrecision(3))
// it returns the  exat precision  number

// to string  method
let z=19
console.log(typeof(z.toString()))
console.log(z.toString())
