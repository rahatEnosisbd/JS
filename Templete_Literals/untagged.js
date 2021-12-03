// untagged template literals
console.log(`The weather is fine today.`)

console.log('\n****************************')
console.log(`The weather is fine today.
We are going on a road trip.`)

console.log('\n****************************')
let brand = "ASUS"
console.log(`My laptop brand is ${brand}.`)


console.log('\n Expression interpolation')
let a =4,b=9
console.log(`Sum = ${a+b}`)

console.log("\nNesting templates")
let hr = 19
let bannerText = `Good to ${hr<12? 'morning' : (hr<18? 'afternoon' : 'night') }`

console.log(bannerText)