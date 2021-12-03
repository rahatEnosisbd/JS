let a, b, rest;

console.log("\n**********************");
console.log("Destructuring objects:\n");

let ob1 = {
    a: 11,
    b: 22
};

({a, b} = ob1); //The parentheses ( ... ) around the assignment 
                // statement are required when using object literal
                //  destructuring assignment without a declaration.

console.log(a, b);

({a, b, ...rest} = {
    a:1,
    b:2,
    c:3,
    d:4
});

console.log(a);
console.log(b);
console.log(rest);


let language={
    langName: "C++",
    difficulty: "medium"
};

let {langName, difficulty} = language;

console.log(langName, difficulty);

console.log("\n**********************");
console.log("Assigning new variable names:\n");

let fruit={
    price: 300,
    taste: "sweet"
};

let {price:p, taste:t} = fruit;

console.log(p, t);

console.log("\n**********************");
console.log("Default values:\n");

({a=3, b=9}= {a: 10});
console.log(a, b);


console.log("\n**********************");
console.log("New variable name and Default values:\n");

let {a:aa = 30, b:bb = 90}= {a: 100};
console.log(aa, bb)

