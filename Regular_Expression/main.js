let re = /ab+c/;
re = new RegExp('ab+c');


let text ="its a wonderful day"
console.log(text.match(/w\B/))
console.log(text.match(/wond(?=er)/))
console.log(/\d+(?!\.)/.exec('3.141'))
console.log(/(?<!-)\d+\.\d+/.exec('34.1416'))
console.log(text.match(/(d)/))


var myRe = /d(b+)d/g;
var myArray = myRe.exec('cdbbdbsbzdbd');

console.log(myArray)
console.log([..."cdbbdbsbzdbd".matchAll(myRe)])

console.log("cdbbdbsbz".match(/d(b+)d/g))
console.log(/d(b+)d/g.exec('cdbbdbsbz'))