//Create a function that reverses a string
function FirstReverse(str) {
  // code goes here
  let rev_string = str
    .split("")
    .reverse()
    .join("");
  return rev_string;
}

console.log(FirstReverse("code"));
//RESULT: edoc
