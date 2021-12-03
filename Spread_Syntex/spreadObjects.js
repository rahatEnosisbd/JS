import util from "util"

function fullPrint(...args)
{
    console.log(util.inspect(args, false, null, true /* enable colors */))
}

console.log("\n**************************")
console.log("Spread syntex on objects:\n")
const subj = {
    teacher: "Abdullah",
    totalStudent: 40,
    lab:{
        credit:3
    }
}

const newSubj ={
    ...subj,
    credit: 4
}
subj.teacher = "Amin"
console.log({newSubj})

// Note: nested obj in an obj is shallow coppied
// here sub.lab is shallow coppied, so changing it
// will change newSubj

console.log("changing nested obj lab changes both obj:")

subj.lab.credit = 2
console.log({subj})
console.log({newSubj})


console.log("\n**************************")
console.log("use Object.assign():\n")
// Object.assign() method copies all enumerable own properties
//  from one or more source objects to a target object. 
// The copy here is shallow copy. Only copies to one level.
//  Nested obj is not copied, only referenced. See e.g.

let ob1 = {
    'a':1,
    'b':{
        'c':4
    }
}
let ob2={
    len: 29,
    weight: 80,
    language:{
        motherTongue: "Bangla",
        other: "English"
    }
}

let returnedObj= Object.assign(ob1, ob2)

// using spread syntex
let ob3 = {
    ...ob1,
    ...ob2
}

ob2.weight = 55
ob2.language.motherTongue="Spanish"


console.log({ob1})
console.log({returnedObj})

console.log({ob3})

console.log("\n**************************")
console.log("Simple obj concatenation:\n")
function merge(...objects)
{
    return {
        ...objects
    }
}
ob3 = merge(ob1, ob2)

fullPrint({ob3})