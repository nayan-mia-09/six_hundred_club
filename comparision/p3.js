
// Compare 1

const iHave = 50;
const friendHave = "50";

console.log(iHave == friendHave); // true
console.log(iHave === friendHave); // false

// Compare 2

console.log("JavaScript" == 'JavaScript'); //true
console.log("JavaScript" === 'JavaScript'); //true

// Compare 3

const inpNum = 50;
const inpStr = "50";

console.log(inpNum == inpStr); // true
console.log(inpNum === inpStr); // false

// Compare 4
const str = "apple";
console.log(str == str); // true
console.log(str === str); // true

// Compare 5

const str1 = "TEST";
const str2 = "test";

console.log(str1 == str2); //false
console.log(str1 === str2); // false 

// Compare 6

const variableX = 15;
const variableY = "20";

console.log(variableX != variableY); // true
console.log(variableX !== variableY); // true

// Compare 7

const variableA = hello;
const variableB = "Hello";

console.log(variableA == variableB); // ReferenceError: hello is not defined
console.log(variableA === variableB); // ReferenceError: hello is not defined



