// Data Types

let name = "Ishaq";
let age = 20;
let isStudent = true;
let address;
let phone = null;


// Checking data types

console.log(name);
console.log(typeof name);

console.log(age);
console.log(typeof age);

console.log(isStudent);
console.log(typeof isStudent);

console.log(address);
console.log(typeof address);

console.log(phone);
console.log(typeof phone);


// Type Conversion

// String to Number

let marks = "85";
let newMarks = Number(marks);

console.log(newMarks);
console.log(typeof newMarks);


// Number to String

let price = 500;
let newPrice = String(price);

console.log(newPrice);
console.log(typeof newPrice);


// String to Boolean

let value = "true";
let newValue = Boolean(value);

console.log(newValue);
console.log(typeof newValue);


// Practice Task

let result = Number("abc");

console.log(result);
console.log(typeof result);

// "abc" cannot be converted into a valid number, so it gives NaN.


console.log(Boolean(0));

console.log(Boolean(1));

// 0 gives false and 1 gives true.