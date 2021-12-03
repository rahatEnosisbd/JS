let nums = [1,2,3,4]

let max = Math.max.apply(null, nums)
console.log(max)

function maxFinder(...values)
{
    console.log(values)
    return Math.max(...values)
}

let mxFn =  maxFinder.apply(null, nums);
console.log({mxFn})

nums.push.apply(nums, [5,6])
console.log(nums)