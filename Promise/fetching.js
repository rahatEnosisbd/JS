import fetch from "node-fetch"

let promise = fetch('http://time.jsontest.com')

promise
.then(
    response => {
        return response.json()
    }
)
.then(
    result => {
        // console.log(result) 
        return fetch(`https://api.github.com/users/defender01`)
    }
)
.then(response => response.json())
.then(result=>{
    // console.log(result)

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("do something")  
            resolve(result)
        },3000)
    })
     
})
.then(result=> {
    console.log(`${result.login} has done something`)
})
.catch(error => console.log(error.message))


new Promise(function(resolve, reject) {
    throw new Error("Whoops!");
}).catch(error=> console.log(error.message))

new Promise(function(resolve, reject) {
    resolve("ok");
}).then(function(result) {
    throw new Error("Alas!"); // rejects the promise
}).catch(error=> console.log(error.message))
