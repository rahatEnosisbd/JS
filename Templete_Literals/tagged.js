// tagged template literals

// here first argument is  all the strings and 
// remaining arguments are all the expressions
function collector(strings, ...values)
{
    console.log({strings})
    console.log({values})

    console.log("Done collecting!!")
}

let a= 3, b=4
collector`I have used ${a} laptops and ${b} mouse \n in my programming career.`


console.log("\n*********************")


let name = "Mike"
let num = 4
function myTag(strings, person, num)
{
    console.log({strings})
    console.log({person})
    console.log({num})
    return `${strings[0]} ${person} ${strings[1]} ${num} ${strings[2]}`;
}

console.log(myTag`That ${name} has ${num} watches.`)



console.log("\n*********************")

function template(strings, ...keys) {
    console.log({strings})
    console.log({keys})
    return (function(...values) {
      let dict = values[values.length - 1] || {};
      let result = [strings[0]];
      keys.forEach(function(key, i) {
        let value = Number.isInteger(key) ? values[key] : dict[key];
        result.push(value, strings[i + 1]);
      });
      return result.join('');
    });
  }
  
  let t1Closure = template`${0}${1}${0}!`;
  //let t1Closure = template(["","","","!"],0,1,0);
  console.log(t1Closure('Y', 'A'));                      // "YAY!"
  
  let t2Closure = template`${0} ${'foo'}!`;
  //let t2Closure = template([""," ","!"],0,"foo");
  console.log(t2Closure('Hello', {foo: 'World'})); // "Hello World!"


console.log("\n*********************")

function pathFinder(strings, ...lengths)
{
    console.log({strings})
    console.log({lengths})
    return function(...values)
    {
        console.log({values})
        let fullPath = ''
        for(let i=0; i<values.length; i++)
        {
            fullPath+= `${strings[i]} to ${strings[i+1]} distance ${lengths[i]}\n`
        }
        return fullPath;
    }
}

let pathDesc = pathFinder`Dhaka ${20} Chittagong ${30} Khulna ${40} Barishal`
console.log(pathDesc(1,2,3))


console.log("\n***************************")

console.log("Raw Strings(without removing the escape characters):\n")

function rawText(strings, ...values) {
    console.log({strings})
    console.log({values})
    // allows to print raw sequences without processing
    // the escape sequence(e.g \, n)
    console.log(strings.raw);
    console.log(strings.raw[0]);
    console.log(strings.raw[1]);
  }
  
rawText`string text line ${1} \n string text line ${2}`;


let greet = String.raw`Hi\n ${1+3}`
console.log({greet})

let processed = Array.from(greet).join(',')
console.log(processed)

console.log(`all \u00A9 \0o347`)