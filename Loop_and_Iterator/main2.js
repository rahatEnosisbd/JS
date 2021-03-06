// for...in statement

var triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {  // own property
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
  else{
    console.log("inherited property: "+prop)   
  }
}
