// // This is Commonjs modules

// // const createDragon =require("./dragonModule")
// const {createDragon, flyDragon, fireBreath} = require("./dragonModule")
// createDragon()


// This is ES6 modules
// note the imported variables are const
// you can only change them from inside the module

import carGoForward from "./carModule.js";
import { speed, turnLeft } from "./carModule.js";
import { 
    goRight as turnRight, 
    increaseSpeed as riseSpeed
} from "./carModule.js";

import  busGoForward from "./busModule.js";
import {
    speed as busSpeed,
    goLeft as busGoLeft,
    goRight as busGoRight,
    increaseSpeed as BusIncreaseSpeed
} from "./busModule.js"

carGoForward();

turnLeft();
turnRight();

console.log("car speed = "+speed);

riseSpeed();


busGoForward()

busGoLeft();
busGoLeft();

console.log("Bus speed = "+busSpeed);

BusIncreaseSpeed();