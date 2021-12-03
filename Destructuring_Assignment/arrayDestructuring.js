// The destructuring assignment syntax is a JavaScript 
// expression that makes it possible to unpack values from 
// arrays, or properties from objects, into distinct variables.

let a, b, rest;
[a, b] = [10, 20]

console.log(a);

console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);

console.log("\n**********************");
console.log("Taking first two elements from array:\n");

let [firstElm , secondElm] = [100, 200, 300, 400];
console.log(firstElm, secondElm); 

console.log("\n**********************");
console.log("Left side variables are more than right side variables:\n");

let [first, second, third, fourth] = [11, 22];
console.log(first, second, third, fourth) //third and fourth are undefined.



console.log("\n**********************");
console.log("Default values:\n");

[a=1, b=2] = [7];
console.log(a, b);

console.log("\n**********************");
console.log("Swapping values:\n");

[a, b] = [10, 20];
console.log(a, b);

[a, b] = [b, a];
console.log(a, b);

console.log("\nSwapping values of 0th and 1st value of an array:")
let nums = [1, 2, 3];
console.log(nums);
[nums[1], nums[0]] = [nums[0], nums[1]];
console.log(nums)

