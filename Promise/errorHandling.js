import fetch from "node-fetch"

new Promise(function(resolve, reject) {
    throw new Error("Whoops!");
})
.catch(function(error) {
    console.log("The error is handled, continue normally");
})
.then(() => console.log("Next successful handler runs"));


// here the .catch block analyzes the error and throws it again:
// the execution: catch -> catch -> then
new Promise((resolve, reject) => {
    throw new Error("Whoops!");
}).catch((error)=> { // (*)
    if (error instanceof URIError) {
    // handle it
        console.log("its handeled")
    } else {
        console.log("Can't handle such error");
        throw error; // throwing this or another error jumps to the next catch
    }
}).then(() => {
/* never runs here */
}).catch(error => { // (**)
    console.log(`The unknown error has occurred: ${error}`);
// don't return anything => execution goes the normal way
});


fetch('no-such-user.json') // (*)
.then(response => response.json())
.then(user => fetch(`https://api.github.com/users/${user.name}`)) // (**)
.then(response => response.json())
.catch(error => console.log(error.message));

new Promise(function(resolve, reject) {
    setTimeout(() => {
        // resolve("done")
        // throw new Error("Whoops!");
        reject("no issue")
    }, 1000);
})
.catch(error => console.log(error))
