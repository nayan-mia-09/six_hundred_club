const fatherAge = '50';
const sonAge = '20';

const total = fatherAge + sonAge;
console.log(total); // 5020

const sugar = parseInt('20');
console.log(sugar); // 20

const FatherAge = '50';
const fatherAgeNumber = parseInt(FatherAge);
console.log(fatherAgeNumber); // 50

const input = 'x20';
const num = parseInt(input);
console.log(num);// NaN (Not A Number)

const age = parseInt("asdfghg");
const weight = parseInt("twenty");
console.log(age, weight); // NaN NaN

const Age = parseInt('50f');
const Weight = parseInt("9twenty");
const address = parseInt("tom63");

console.log(Age, Weight, address); // 50 9 NaN

const Sugar = parseInt("1.22222");
console.log(Sugar); // 1

const sugarFloat = parseFloat("1.22222");
console.log(sugarFloat); // 1.22222

const first = 12.13568;
const second = 31.22565;
const totalSum = first + second;
const totalNum = parseFloat(totalSum.toFixed(3)); 
console.log(totalNum); // 43.316

