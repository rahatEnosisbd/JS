// callback is passed in another function to invoke after doing some task

function greet()
{
    console.log("Hi everyone!!")
}

function attend(cb)
{
    console.log("You have attended.")

    cb()
}

// greet is a callback
attend(greet)