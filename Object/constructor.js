let obj = {}
console.log(obj.constructor===Object)

obj = new Object
console.log(obj.constructor===Object)

let arr = []
console.log(arr.constructor===Array)

let n= new Number(10)
console.log(n.constructor===Number)

// object constructor function
function makeCar(name)
{
    this.name= name;
}

let car = new makeCar("Bugatti");
console.log({car})
console.log('consturctor is: '+car.constructor);

let val =89;
// val.constructor = String

val = "aaa"
// val.constructor = Number
// val.foo ="kkk"

function Parent() { /* ... */ }
function CreatedConstructor() {
   Parent.call(this)
}

CreatedConstructor.prototype = Object.create(Parent.prototype)

CreatedConstructor.prototype.create = function create() {
  return new this.constructor()
}

let ob1 = new CreatedConstructor()

console.log(ob1.constructor)

CreatedConstructor.prototype.constructor = CreatedConstructor // sets the correct constructor for future use
ob1 = new CreatedConstructor()

console.log(ob1.constructor)

ob1.create().create()



function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// You can NOT add a new property to a constructor function
Person.nationality = "English";

let p1 = new Person("rahat", "rizvi", 22, "black")
console.log({p1})
console.log(p1.nationality)