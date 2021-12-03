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
    console.log("Bus is going forward")
}

function goLeft()
{
    console.log("Bus is going Left")
}
function goRight()
{
    console.log("Bus is going Right")
}

export function increaseSpeed()
{
    console.log("New speed 100kmph")
}

// this is the default export; while importing from this module
// we will get goForward by default
export default goForward

export const speed = 60
export const model = "BRTC"

export {
    goLeft,
    goRight
}
