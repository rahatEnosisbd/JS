function Person(first, last, age, gender, interests) {

    // property and method definitions
    this.name = {
      'first': first,
      'last' : last
    };
    this.age = age;
    this.gender = gender;
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

console.log(Object.getPrototypeOf(Person))
console.log(Object.getPrototypeOf(person1))
console.log(Object.getPrototypeOf(person1)===Person.prototype)

console.log(person1.valueOf())

let person2 = new Person("John", "wick", 40, 'male', ['action', 'dogs']);

console.log(Object.getPrototypeOf(person1)===Object.getPrototypeOf(person2))

delete person1.valueOf
console.log(person1.valueOf())
console.log(person1.__proto__===Object.getPrototypeOf(person1))

let person3 = Object.create(person1)
console.log(person3.__proto__)
console.log({person3})
person1.name.first = "Rick"
console.log(person3.name)

console.log("constructor is: "+person1.constructor)
console.log("constructor is: "+person2.constructor)

let person4 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);

console.log({person4})

console.log(person1.constructor.name )

Person.prototype.getPromotion = function ()
{
    console.log(`${this.name.first} has got a promotion`)
}

person1.getPromotion()