flyDragon()

function flyDragon(){
    console.log("Dragon is flying!!")
}

// hoisting doesn't work on arrow notation
// catchDragon()

// let catchDragon(){
//     console.log("Dragon is caught!!")
// }

// var type variables are hoisted and initialized with 'undefined'
// accessing before declaration shows 'undefined'
console.log(num)
var num = 999

// no hoisting, only init
// console.log(age)
// age = 14

student = "rahim"
console.log(student)
console.log(typeof student)

console.log(student+ " pays ticket price "+price)

var price = 99
console.log({price})


// let, const variable are hoisted but are not initialized with 'undefined'
// throws err
// console.log(fruit)
// let fruit ='mango'


// TDZ(temporal dead zone) starts at beginning of scope
const func = () => console.log(letVar); // OK

// Within the TDZ letVar access throws `ReferenceError`

// func()//called before declaration throws error

let letVar = 3; // End of TDZ (for letVar)
func(); // Called outside TDZ!
