// how to convert string to number
let a="10"
console.log(typeof a)
// to convert  string to number we use a Number() method
let b=Number(a)
console.log(typeof b)


// Number methods
// is integer  -- to check the number
console.log(Number.isInteger(10))  // true
console.log(Number.isInteger(10.00))// true

// to parssInt() - convert the string to integer

console.log(Number.parseFloat("10.003"))
console.log(parseFloat("10.003"))
console.log(parseInt("12345.7"))

// to exponential
let x=10.00007
console.log(x.toExponential(4))
console.log(x.toFixed(2))