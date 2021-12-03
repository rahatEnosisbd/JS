const object1 = {
    a: 'somestring',
    b: 42
};

for(let [key, value] of Object.entries(object1))
{
    console.log(key, value);
}

console.log("***************************************")

let freezObj = Object.freeze(object1)

// freezObj.a ="changed";

let entries = new Map([
    ['age', 32],
    ['name', 'Saadi']
])


let object2 = Object.fromEntries(entries)
let object3 = Object.fromEntries([
    ["name", "Sahenshah"],
    ["profession", "king"]
])
console.log({object2})
console.log({object3})

let descriptor1 = Object.getOwnPropertyDescriptor(object2, "age");
console.log({descriptor1})
console.log(Object.getOwnPropertyNames(object1));

let symbol1= Symbol('any text')
let symbol2 = Symbol.for("some text")

object2[symbol1]="localSymbol"
object2[symbol2]="globalSymbol"
console.log({object2})

console.log(Object.getOwnPropertySymbols(object2))

let prototype = {}
let object4 = Object.create(prototype)
console.log(Object.getPrototypeOf(object4)==prototype)

console.log(Object.is(object3, object4))
console.log(Object.is(object3, object3))
console.log(Object.is(12,12))

console.log(Object.isExtensible(object1));

console.log(Object.isExtensible(object2));

Object.preventExtensions(object2);
console.log(Object.isExtensible(object2));

try {
    Object.defineProperty(object2, 'property1', {
      value: 42
    });
  } catch (e) {
    console.log(e);
    // expected output: TypeError: Cannot define property property1, object is not extensible
  }
console.log("hi")

console.log(Object.isSealed(object3))
Object.seal(object3)
console.log(Object.isSealed(object3))
console.log({object3})
object3.name="Akbar"
console.log({object3})

console.log(Object.values(object3))