let user = {
    name: "rahat",
    password:{
        value: "1234",
        enumerable: false
    },
    greet: function ()
    {
        return `welcome ${this.name}!!`;
    }
}

let userCopy = Object.create(user); //here user object is the prototype 
                                    // of newly created object userCopy

console.log({userCopy});
console.log(userCopy.name);
console.log(userCopy.password);
console.log(userCopy.greet());


let watch = {
    brand:{
        value: "Time Zone",
        // enumerable: true
    },
    price:{
        value:5000,
        enumerable: false
    }
}



let userInfo = Object.create(user, watch);

console.log({userInfo})
console.log(userInfo.price)