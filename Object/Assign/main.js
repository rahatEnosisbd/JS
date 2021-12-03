console.log("Using Object() constructor:")

let obj = new Object(3);
console.log(obj)

obj = new Object();
console.log(obj)
obj.age =32
console.log(obj)

obj = new Object({"name": "rahat"});
console.log(obj)


console.log("\n*********************************")
console.log("Using Object.assign()\n");

let mobile={
    weight: "200gm",
    purpose: ["call", "compute", "web browsing"],
    price: "cheaper"
}
let laptop={
    weight: "2kg",
    keypad: true,
    performance: "high",
    purpose:["programming", "web browsing"]
}

let device = Object.assign(laptop, mobile);
console.log({device})
console.log({laptop})

console.log("\n*********************************")
console.log("Using Object.create()\n");

let mobile2 = Object.create(mobile)

console.log({mobile})