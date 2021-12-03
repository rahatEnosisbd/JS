let promise = new Promise(resolve=>{
    setTimeout(()=>{
        resolve("Its done")
    }, 1000)
})

promise.then(
    result=> console.log(result)
)


promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject(new Error("An error occured"))
    }, 1000)
})

promise.then(
    null,
    error => console.log(error.message) 
)

promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject(new Error("Again an error occured"))
    }, 1000)
})

promise.catch(
    error => console.log(error.message) 
)


promise = new Promise((resolve, reject)=>{
    resolve("Its immediately resolved. But wait!!")
    reject(new Error("Its immediately rejected. But wait!!"))
    console.log("inside promise")
})

promise.then(
    result => console.log(result)
)
.catch(error=> console.log(error.message))

console.log("the code after immediately executed promise!!")
