// const {getSpeed} = require("./flyModule")
import getSpeed from "./flyModule.js"

console.log("your speed is: "+ getSpeed(3))

function fly()
{
    // not strict mode
    // undeclared var is ok
    x=99       // initialized and declared
    console.log(x)
    console.log("not in strict mode: flying!")
}

function birdFly()
{
    "use strict";
    function eat(){
        // undeclared variable will throw err
        // x=99
        // console.log(x)

        return "eating"
    }

    
    console.log("In strict mode "+ eat())
    
    fly()
}

birdFly()


// 
console.log("\n\n\n******************************************")
console.log("examples of converting mistakes into err")
function calamity()
{
    "use strict"
    var undefined = 99           // throws err
    console.log({undefined})

    var Infinity = 99            // throws err
    console.log({Infinity})

    var ob1 = {}
    Object.defineProperty(ob1, 'val', {
        value: 20,
        Writable: false
    })

    // ob1.val = 40           //throws err


    // Assignment to a new property on a non-extensible object
    var fixed = {a:5};
    Object.preventExtensions(fixed);
    // fixed.newProp = 'ohai';      // throws a TypeError

    // delete Object.prototype      //throws err

}
calamity()


// function sum(a, a, c) { // !!! syntax error parameters name are not unique
//     'use strict';
//     return a + a + c; // wrong if this code ran
// }

console.log("\n\n*********************************************")
function sumOctal()
{
    "use strict"
    // let sum = 012+023;        //without strict mode these are 
    //                             //considered octal numbers
    // console.log(sum);

    let sum2 = 0o12+0o23;     //octal numbers
    console.log(sum2);
}
sumOctal()


function premitiveChange() {
    'use strict';
    
    // false.true = '';         // TypeError
    // (14).sailing = 'home';   // TypeError
    // 'with'.you = 'far away'; // TypeError
    
    // let a=99
    // a.val =40
    
}

premitiveChange()


var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
// var evalX = eval("var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);


function deleteName()
{
    "use strict"
    // var x
    // delete x //throws error ,  strict mode forbids deleting plain names.
}
deleteName()

function castError()
{
    'use strict';
    // eval = 17;
    // arguments++;
    // ++eval;
    // var obj = { set p(arguments) { } };
    // var eval;
    // try { } catch (arguments) { }
    // function x(eval) { }
    // function arguments() { }
    // var y = function eval() { };
    // var f = new Function('arguments', "'use strict'; return 17;");

    function fun() { return this; }
    console.assert(fun() === undefined);
    console.log(fun.call(2))
    console.assert(fun.call(2) === 2);
    console.assert(fun.apply(null) === null);
    console.assert(fun.call(undefined) === undefined);
    console.assert(fun.bind(true)() === true);

    
    
}
castError()


function argumentCheck(a) {
    'use strict';
    a = 42;
    console.log({arguments})     //argument[0] and a are different; one doesn't change 
                                // by changing other. arguments objects for strict mode functions store the
                                //  original arguments when the function was invoked
    return [a, arguments[0]];
  }
  var pair = argumentCheck(17);
  console.assert(pair[0] === 42);
  console.assert(pair[1] === 17);


function restricted(a) {
    'use strict';
    // console.log(restricted.caller)
    // console.log(restricted.arguments)
    // restricted.caller;    // throws a TypeError
    // restricted.arguments; // throws a TypeError
}
function privilegedInvoker() {
    return restricted(3);
}
privilegedInvoker();

function myFunc()
{
    'use strict';
    function fun(a, b) {
        'use strict';
        var v = 12;
        
        console.log({arguments})
        // console.log(arguments.callee) //throws err
        console.log(arguments.caller)
        return arguments.caller; // throws a TypeError
    }
    fun(1, 2); // doesn't expose v (or a or b)
}

myFunc()

function checker()
{
    'use strict';
    if (true) {
    function f() {
        console.log("Hi!!!!!!!!!!")
    } // !!! syntax error
    f();
    }
}
checker()

function fiveTimes()
{
    "use strict"
    for(let i=0; i<5; i++)
    {
        function f()
        {
            console.log("iteration: "+i)
        }
        f()
    }
}
fiveTimes()
