import { circle, square } from "./shapes.js";

let c= new circle(3);
console.log("radious= "+ c.radious);
console.log("circle area= "+c.getArea());

let sq = new square(5);
console.log("Length of one sid = "+sq.sideLength)
console.log("Square area= "+sq.getArea())

