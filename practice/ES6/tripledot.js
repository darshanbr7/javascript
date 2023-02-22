let a=["hello","java"];
let b=[...a,"java","javascript"];
//console.log(a);
console.log(b)
// extracting the value  of the previous object  is called ... operator

let c={int:01,
      double:20}
      console.log(c)
let d={
    ...c,int:35
}
console.log(d)

/* in javascript  in ... operator Array allows duplicate thatswhy duplicate vaalues are stored
 but in object , object does't allow the duplicate key thats why key value is updated
 */