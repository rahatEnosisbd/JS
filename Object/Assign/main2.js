console.log("Merging object with object.assign():")
let o1 = {a:1}
let o2 = {b:2}
let o3 = {c:3}

let newObj = Object.assign(o1,o2,o3)
console.log({newObj})
console.log({o1})


console.log("\n*********************************")
console.log("Using Object with same property:\n");

o1 = {a:1, b:1, c:1}
o2 = {b:2, c:2}
o3 = {c:3}

newObj = Object.assign(o1,o2,o3)  //The properties are overwritten by other objects that 
                                // have the same properties later in the parameters order.
console.log({newObj})
console.log({o1})

console.log("\n*********************************")
console.log("Properties on the prototype chain and non-enumerable properties cannot be copied:\n");

let user= Object.create(
    { // this object is used as prototype object for the new object
        status: "logged in"
    },
    {
        age: {
            value:32
        },
        height:{
            value:6,
            enumerable: true
        }
    }
)
console.log({user}) //only enumerable properties are added in new object 

let userCopy = Object.assign({}, user); //here properties in the prototype chain of user object and
                                        // non-enumarable properties are not copied
console.log({userCopy})


console.log("\n*********************************")
console.log("Primitives will be wrapped to objects:\n");

let name = "rahat";
let age = 22;
let programmer = true;

let myObj = Object.assign({}, name, age, null, undefined, programmer);
console.log({myObj}) // Note, only string wrappers can have own enumerable properties.
