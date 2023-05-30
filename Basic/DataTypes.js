/* in  javascript there are two type of classification 
1) primitive
2) Non primitive

primitive means which stores single data
non-primitive means - which stores multiple data

1)primitive
*/
// 1 String  - which is enclosed by single quote or double quote (" ")||('')
const name="user"
console.log(typeof name)

// 2 Number  - which contain only numbers
const number=10.00
console.log(typeof number)

// Boolean  -- which is only true or false value
const value=true
console.log(typeof value)

// Undefined -- which is not  declared before
//const data=undefined
console.log(typeof mean)

// null - variable is defined but value is not assigned
const result=null
console.log(typeof result)

// BigInt  -- which is ends with "n" -- used for large numbers   A BigInt number is created by appending n to the end of an integer. 
const num=1n;
console.log(typeof num)

// symbol   A value having the data type Symbol can be referred to as a symbol value. Symbol is an immutable primitive value that is unique.
const symb=Symbol("hello")
console.log(symb)
console.log(typeof symb)


// non-primitive
// object  - that allows to store collection of data
const details={
    "user":101,
    "name":"rekha"
}
console.log(typeof details)

///
// two symbols with the same description

const value1 = Symbol('hello');
const value2 = Symbol('hello');
console.log(value1)
console.log(value2)
