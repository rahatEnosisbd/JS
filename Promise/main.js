let promise =  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Done")
    }, 1000)
})

promise
.then(value=> console.log(value))
.catch(err=> console.log(err.message))


promise =  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(new Error("an error occured"))
    }, 1000)
})
promise
.then(value=> console.log(value))
.catch(err=> console.log(err.message))



promise =  new Promise((resolve, reject)=>{
    resolve("Done again!!")

    reject("Again what an error!")  //ignored
    
    setTimeout(()=>{
        reject(new Error("Again an error occured"))
    }, 1000)        //ignored
})
promise
.then(value=> console.log(value))
.catch(err=> console.log(err.message))




promise =  new Promise((resolve, reject)=>{
    // resolve("Yes!!! it worked")

    reject(new Error("No!!! It didn't Work"))  //ignored
    
    setTimeout(()=>{
        reject(new Error("Again an error occured"))
    }, 1000)        //ignored
})

promise
.then(
    result=> console.log(result),
    error=> console.log(error.message)
)
