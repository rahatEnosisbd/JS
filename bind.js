let obj = {
    x: 77,
    getX: function(){
        return this.x;
    }
}

console.log(obj.getX())

let unboundedFunction = obj.getX
// console.log(unboundedFunction()) 


// ************************************************************

class Course{
    constructor(name)
    {
        this.name = name
        this.credit = 100

        this.getDescriptin = this.getDescriptin.bind(this)
    }

    printCourse()
    {
        console.log(this.name)
    }

    getDescriptin()
    {
        console.log(this.name)
        console.log(this.credit)
    }
    findDescription = ()=>{
        console.log(this.name)
        console.log(this.credit)
    }
}

let math = new Course("Math")

function fun(method1, method2)
{
    method1()    //throws error. As in class Course, in the getDescriptin() this is undefined(unbounded)
                    // we neet to solve this using bind() in the class
    method2()       //But here this is defined and bounded
}

fun(math.getDescriptin, math.findDescription)

