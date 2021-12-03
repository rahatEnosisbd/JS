console.log("Copying multidimensional array:")
// spread syntex is not suitable for copying mulitidimensional array
let arr = [[1],[2],[3]]

let newArr = [...arr]
console.log({newArr})

// changing newArr[0][0] also affects the arr
newArr[0][0]=9

console.log({newArr})
console.log({arr})

console.log("\n********************************")
console.log("insert an array in the starting of another array:\n")
let arr1 = [1,2,3]
let arr2 = [4,5,6]
Array.prototype.unshift.apply(arr1, arr2)
console.log(arr1)
// this can be done easyly with spread syntex

arr1 = [1,2,3]
arr2 = [4,5,6]
arr1 = [...arr2, ...arr1]
console.log(arr1)



