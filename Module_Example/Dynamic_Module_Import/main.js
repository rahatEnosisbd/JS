
//  returns a Promise, which fulfills with a module object 
import("./circle.js").then((module)=>{
    let c= new module.circle(3);
    console.log("radious= "+ c.radious);
    console.log("circle area= "+c.getArea());

})

import("./square.js").then((module)=>{
    let sq = new module.square(5);
    console.log("Length of one sid = "+sq.sideLength)
    console.log("Square area= "+sq.getArea())
})
