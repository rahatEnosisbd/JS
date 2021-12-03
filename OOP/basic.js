function Person(name) {
    this.name = name;
    this.greeting = function() {
        console.log('Hi! I\'m ' + this.name + '.');
    };
}


let p1= new Person("Saadi")
let p2= new Person("Miraj")
// p1.greeting = function(){
//     console.log("no greeting!!")
// }

p1.greeting()
p2.greeting()

console.log(p1)
console.log(p2)

// Note that when we are calling our constructor function, 
// we are defining greeting() every time, which isn't ideal. 
// To avoid this, we can define functions on the prototype instead

console.log(p1.greeting===p2.greeting)

