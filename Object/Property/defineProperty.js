// defines a new property directly on an object, or modifies an existing property on an object, and returns the object


let obj = {}

Object.defineProperty(obj, 'property1',{
    value: 32,
    writable: false
}
)


console.log({obj})

// obj.property1=88

console.log(obj.property1)

// By default, values added using Object.defineProperty() are immutable and not enumerable.
for(let prop in obj)
{
    console.log(`obj.${prop} = ${obj[prop]}`)
}

console.log("****************************")

Object.defineProperty(obj, 'property2',{
    value: 1000,
    writable: true,
    enumerable: true,
    configurable: true
}
)

let distance = 99
Object.defineProperty(obj, 'property3',{
    get: function(){
        return distance;
    },
    set: function(a){
        distance= a;
    },
    enumerable: true,
    configurable: true
}
)

console.log(obj.property3)

for(let prop in obj)
{
    console.log(`obj.${prop} = ${obj[prop]}`)
}



