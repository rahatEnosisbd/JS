console.log("using String() method:")
let str = String(123)
console.log(str)

console.log("\n using num.toSting() method:")
let num = 1234
str = num.toString()
console.log(str)

console.log("\n using num.toExponential():")
num = 1234
str = num.toExponential()
console.log(typeof str)

console.log("\n using num.toFixed():")
// returns a string, with the number written with a specified number of decimals
num = 10.1234
console.log(num.toFixed(0))
console.log(num.toFixed(1))
console.log(num.toFixed(2))

console.log("\n using num.toPrecision():")
// returns a string, with a number written with a specified length
num = 10.1234
console.log(num.toPrecision())
// console.log(num.toPrecision(0)) //throws err, argument must be between 1 and 100
console.log(num.toPrecision(1))
console.log(num.toPrecision(2))
console.log(num.toPrecision(4))


console.log("\n********************************")
console.log("converting boolean to string")

console.log("\n using String():")
console.log(String(false))

console.log("\n using toString():")
console.log(false.toString())

let obj = {
    name: "rahat",
    age: 24
}

console.log(obj.toString())