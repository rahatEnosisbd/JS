// This is ES6 modules
// note the imported variables are const
// you can only change them from inside the module

// importing everything from busModule
import * as busModule from "./busModule.js"

busModule.default()
busModule.goLeft()
busModule.goRight()
console.log("Bus speed= "+busModule.speed)
busModule.increaseSpeed()