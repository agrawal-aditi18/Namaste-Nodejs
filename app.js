// require("./xyz.js")

const util = require ("node:util"); //inbuilt util module u can export it like this:)----------------------------------------

// const obj =  require("./sum.js")
// const {x, calculateSum} =  require("./calculate/sum.js") //destructuing on the fly
// const {calculateMultiply} =  require("./calculate/multiply.js") //destructuing on the fly

// import {x, calculateSum} from "./sum.js"

const {calculateMultiply, calculateSum} = require("./calculate")  //combined in indexjs , now the calculate folder is itself a module
const data = require("./data.json");
console.log(data);

console.log("jai shree ram")
var a= 10;
var b =20;
console.log(a+b)

// console.log(global);
// console.log(this); //Empty object
// console.log(globalThis === global);

//Without desturcting
/*
console.log(obj.x);
obj.calculateSum(4,5);*/

//With destructring
console.log(x);
calculateSum(a,b);
calculateMultiply(a,b);