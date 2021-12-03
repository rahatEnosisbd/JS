// function dosomething( cb1, cb2, cb3)
// {
//     setTimeout(()=>{
//         console.log("first ")

//         setTimeout(()=>{
//             console.log("second ")
//             setTimeout(()=>{
//                 console.log("Third ")
//             }, 1000)
//         }, 1000)
//     }, 1000)
    
// }

// dosomething()

function setTimeoutPromise(no, ms){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           resolve("done "+ no) 
        }, ms);
    })
}

function callFun(cnt)
{
    let promise = Promise.resolve()
  
    for(let i=0; i<cnt; i++)
    {        
        promise = promise.then(
            (result)=>{
                if(typeof result!== 'undefined')
                    console.log(result)
                return setTimeoutPromise(i, 1000)
            }
        )
    }
    promise.then(
        (result)=>{
            if(typeof result!== 'undefined')
                console.log(result)
        }
    )
}

// callFun(10)


let arr = [1,2,3,4]

let sum = arr.reduce((sum, a)=>{
    return sum+a
}, 0)
console.log(sum)

arr.reduce((prevPromise, a, ind)=>{
    return prevPromise.then(() => {
        return setTimeoutPromise(ind, 1000)
    })
    .then(result => console.log(result))
    
}, Promise.resolve())


