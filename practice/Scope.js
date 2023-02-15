/* there are theree type of scope 
Global scope
Function Scope
Blockscope
*/

// Global Scope
// they can be usable anyware in the same js code 
let a=10;
console.log("Global Scope "+a);

// function Scope
/* variable decalred using Function Scope they are only Accessable inside the  Function 
if we try to Acesses the outside  ut shows an undefined
*/
function b(){
    let c=10;
    console.log("Functional Scope "+c);
}
//console.log(c)
b();

// BlockScope
/*  the code written inside the block || {}  they can be usable only nside the block
outside con't be Acessable 
let and const Es6 the support the block Scope
*/
{
    let d=10;
    const e="darshan";
    var f="mandya";
    console.log("Block Scope "+d);
    console.log("Block Scope "+e);
    console.log("Block Scope "+f);
}
//console.log("Block Scope "+d);
//console.log("Block Scope "+e);


