//In COMMON MODULES-------------------->>

console.log("Sum Module Executed");

 x = "Hello World"; //non strict :)

function calculateSum(a,b) {
    const sum = a+b;
    console.log(sum);
}
module.exports = {
     x : x, //or x only
     calculateSum };
//or we can do like:-----
// module.exports.x = x ;
// module.exports.calculateSum = calculateSum ;



// In ES MODULES---------------------------------->>
/*
console.log("Sum Module Executed");

export var x = "Hello World";

export function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}*/

