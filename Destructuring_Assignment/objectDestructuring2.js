console.log("Unpacking fields from objects passed as a function parameter:\n")
let user={
    name: "Rick",
    age: 25,
    height: 6
}

function getName({name})
{
    return name;
}

function intro({name, age})
{
    return `${name} is ${age} years old.`
}

console.log("Name: "+getName(user));
console.log("Introduction: "+intro(user))


console.log("\n****************************************")
console.log("Setting a function parameter's default value:\n")

function carDesc({model="Nisan", topSpeed=100, color=["white"], price={convertable:50000, nonConvertable:50000}, engine="v8"}={})
{
    // without the {} in the right side of the argument i cannot call carDesc(), 
    // because it will need atleast one property then.
    console.log(model, topSpeed, color, price, engine);
}

let car = {
    model : "Jaguar",
    topSpeed: 150,
    color:["red", "yellow", "black"],
    price:{
        convertable: 100000,
        nonConvertable: 80000
    }
}

carDesc(car)
carDesc()


console.log("\n****************************************")
console.log("Nested object and array destructuring:\n")

let laptop={
    avgWeight: "1.8kg",
    color: ["black", "white"],
    description:[
        {
            ram: "8GB",
            processor: "3GHZ",
            os:["windows", "ubuntu"]
        }
    ]    
};

let {
    avgWeight: avgW = 1.5,
    description:[
        {
            ram= "4GB"
        }
    ]
} = laptop

console.log(avgW, ram)


console.log("\n****************************************")
console.log("For of iteration and destructuring:\n")

let cars = [
    {
        model : "Jaguar",
        topSpeed: 150,
        color:["red", "yellow", "black"],
        price:{
            convertable: 100000,
            nonConvertable: 80000
        }
    },
    {
        model : "Aston martin",
        topSpeed: 140,
        color:["red", "black"],
        price:{
            convertable: 200000,
            nonConvertable: 90000
        }
    }
]

for(let {model:m, topSpeed: ts=100, price:{ convertable: cv = 100000}} of cars)
{
    console.log(`car model is ${m} with top speed ${ts} and convertable price ${cv}`);
}

console.log("\n****************************************")
console.log("Computed object property names and destructuring:\n")

let key = 'price';
let phone={
    price: 20000
};

let {[key]: cost} = phone;
console.log({cost});


console.log("\n****************************************");
console.log("Rest in Object Destructuring:\n");

let {gender, age, ...rest} = {gender:"male", age: 32, height:6, weight:80};
console.log({gender}, {age}, {rest});

console.log("\n****************************************");
console.log("Combined Array and Object Destructuring:\n");

let students=[
    {id: 1, name: "Rahat"},
    {id: 2, name: "Shihab"},
    {id: 3, name: "Miraj"},
];

let [,,{name}]= students; //obly taking the name of the third obj in students array
console.log(name)