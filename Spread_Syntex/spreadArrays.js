function sum(a, b, c)
{
    return a+b+c
}

let numbers = [1,2,3]
console.log({numbers})

// replacing apply()
// It is common to use Function.prototype.apply() in cases where
//  you want to use the elements of an array as arguments to a function.
console.log(sum(...numbers))
console.log(sum.apply(null, numbers))

function printAll(...all)
{
    console.log(all)
}

// rest syntext is opposite to spread syntex
//  rest parameter syntax allows a function to accept an indefinite number of arguments as an array

function max(...args) //here ...args is rest syntex
{
    let mx = -Infinity;
    for(let i=0; i<args.length; i++)
    {
        mx= Math.max(mx, args[i])
    }
    return mx
}

console.log("Max is: "+max(...numbers))

console.log("\n**************************")
console.log("Merging two arrays:\n")

let arr1 = [1,2,3]
let arr2 = [4,5,6]

let arr3 = [...arr1, ...arr2]

console.log(arr3)

arr3 = [...arr3, 7]

console.log(arr3)

arr3= [...arr3, 'Sam', 44]
console.log(arr3)

console.log("\n**************************")
console.log("Using multiple spread syntex in arguments:\n")

numbers = [1,2]

function adder(a,b,c,d,e,f)
{
    return a+b+c+d+e+f
}

console.log("Added value: "+adder(...numbers, 3, 4, ...numbers))
console.log("Added value: "+adder.apply(null, [...numbers, 3, 4, ...numbers]))

console.log("\n**************************")
console.log("Apply for new operator:\n")

let dateVals= [2021, 0, 10]
let d =  new Date(...dateVals)
console.log(d.toDateString())

