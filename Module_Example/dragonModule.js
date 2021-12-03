// This module contains exapmle for commonjs module
// have to remove
// {
//     ...
//     "type": "module"
//     ... 
// }
// from package.json


function flyDragon(){
    console.log("Dragon is flying!!")
}

function fireBreath()
{
    console.log("Burn all objects!!")
}

function createDragon()
{
    console.log("Dragon is created!!")
}

// // default export
// module.exports = createDragon;

// named export
module.exports = {
    createDragon,
    flyDragon,
    fireBreath
}

