let s1 = "a";
let s2 = "b";
console.log(s1.localeCompare(s2));

let alphabets = ["d", "c", "a", "b"];

alphabets.sort((a, b) => {
  console.log(a, b, a.localeCompare(b), a<b);
  return a.localeCompare(b);
});
console.log(alphabets);

// ********************************

let nums = [4,2,7,5,1]

nums.sort((a,b) => {
  console.log(a,b, a<b)
  return a<b;
})
