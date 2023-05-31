// some string methods

// chatAt()  this method  provide the character at the specified index
let user="Hello"
console.log(user.charAt(2))
console.log(user.charAt(3))
console.log(user.charAt(9))
console.log(user.charAt(-9))

// chatCodeAt()  -- this method is provide the unique value of the character present at that index
console.log(user.charCodeAt(2))
console.log("u".charCodeAt(0))

// concat  -- it provides the combination of two or more string
console.log("hello ".concat("user"))

// indexof()  --  it provide the index  of the given  character
// note :  This method is only gives the first present charatcter's index
console.log("hello".indexOf("o"))

// last indexof()-- it provide the the  last index of the the specified character
console.log("Hello".indexOf("l"))
console.log("Hello".lastIndexOf("l"))

//search()  -- search the regular expresiion in the in given string
console.log("String search method")
console.log("javascript is a scripting language".search("language"))
console.log("javascript is a scripting language".search("z"))
console.log("javascript is a scripting language".search("e"))
console.log("javascript is a scripting language".search("a"))
console.log("..........")
console.log("Hello hi hlo".indexOf("hlo"))

// replace   --  the method allow to change the value
console.log("hello javascript".replace("script","tscript"))
console.log("hello javascript".replace(/a/g,"A"))

var str=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  

console.log(str.replace(/Node.js/g,"AngularJS"))
console.log(str.replace(/o/g,"O"))

// using substr 
console.log(str.substr(3,10))

// slice and substring()
var str=" Learn Node.js on Javatpoint. Node.js is a well-known JavaScript framework.";  
console.log(str.slice(1,5))
console.log(str.substring(1,5))

