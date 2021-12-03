// This module contains exapmle for ES6 module
// have to add
// {
//     ...
//     "type": "module"
//     ... 
// }
// from package.json

function goForward()
{
    console.log("car is going forward")
}

function goLeft()
{
    console.log("car is going Left")
}
function goRight()
{
    console.log("car is going Right")
}

export function increaseSpeed()
{
    console.log("New speed 120kmph")
}

// this is the default export; while importing from this module
// we will get goForward by default
export default goForward 

export const speed = 100
export const model = "Subaru"

export {
    goLeft as turnLeft, //changing name of the function
    goRight
}
