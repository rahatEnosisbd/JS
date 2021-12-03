function Person(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
};

Person.prototype.greeting = function()
{
    console.log(`${this.name.first} ${this.name.last}  says hello`);
}

function Teacher(first, last, age, gender, interests, subject)
{
    Person.call(this, first, last, age, gender, interests)
    this.subject = subject
}

let mathTeacher = new Teacher("Kamal", "Uddin", 40, "male", ["Book reading", "Travelling"])
// mathTeacher.greeting()

console.log(Object.getOwnPropertyNames(Teacher.prototype))

Teacher.prototype = Object.create(Person.prototype)

console.log(Teacher.prototype.constructor)

Teacher.prototype.constructor = Teacher
// or
Object.defineProperty(Teacher.prototype, "constructor",{
    value: Teacher,
    enumerable: false,
    writable: true
} )

console.log(Teacher.prototype.constructor)

let engTeacher = new Teacher("Rezia", "Begum", 40, "female", ["Book reading", "Travelling"])
engTeacher.greeting()

Teacher.prototype.greeting = function()
{
    console.log(`Hi everyone. I am ${this.name.first}`)
}
// mathTeacher.greeting()
engTeacher.greeting()

Teacher.prototype.getPromotion = function()
{
    console.log(`${this.name.first} got a promotion!!`)
}

engTeacher.getPromotion()


function doSomething(){}
console.log( doSomething.prototype );
//  It does not matter how you declare the function; a
//  function in JavaScript will always have a default
//  prototype property — with one exception: an arrow
//  function doesn't have a default prototype property:
const doSomethingFromArrowFunction = () => {};
console.log( doSomethingFromArrowFunction.prototype );


function Graph() {
    this.vertices = [4,4];
}
  
var g = new Graph();

console.log(g.vertices)
g.vertices = 23
delete g.vertices
console.log(g.vertices)