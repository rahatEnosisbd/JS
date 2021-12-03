let promise1 = Promise.resolve(1)
let promise2 = 2
let promise3= new Promise((resolve, reject)=>{
    resolve("its done")
})

Promise.all([promise1, promise2, promise3]).then(results => {
    console.log(results)
})

Promise.all(
    [1,2,3, Promise.reject(555)]
    ).then(
        results => console.log(results)
    ).catch(error => console.log(error))
