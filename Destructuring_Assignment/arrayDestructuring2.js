function fun()
{
    return [22, 33];
}

let [a, b] = fun();

console.log(a, b);

console.log("\n****************************")
// Ignoring some returned values
function threeNums()
{
    return [1,2,3];
}
let [x, , y] = threeNums();
console.log("ingnored the second number:")
console.log(x, y);
