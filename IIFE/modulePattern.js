console.log("\n*************************");
console.log("The module pattern\n");

let user = {
    name: "Rahat",
    password: "1234",
    login: function(){
        if(this.password=="1234")
        {
            console.log("logged in")
        }
    },
    logout: function (){
        console.log("User is logged out")
    }
}

user.login();
console.log(user.password)  // password is public, so anyone can access it

//to make this private we can use IIFE 

let userInfo = (function (){
    let name = "Rahat";
    let password="1234";
    return {
        login: function(){
            console.log(this.password)
            if(password=="1234")
            {
                console.log("logged in")
            }
        },
        logout: function (){
            console.log("User is logged out")
        }
    }
})()

console.log("using IIFE:")
console.log("password= "+userInfo.password)  //password is not public here, it's a private variable
userInfo.login()
