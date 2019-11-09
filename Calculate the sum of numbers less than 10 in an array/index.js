//Calculate the sum of numbers less than 10 in an array

//SOLUTION

//Function
const Calc = (input, range) => {
  if (!Array.isArray(input)) {  //Check if argument passed is an array
    return console.log("Pass in an array");  //Return if not an array
  }
  let total = 0;
  for (let i = 0; i <= input.length; i++) {
    if (input[i] <= range) {
      total = total + input[i];
    } else continue;
  }
  console.log(total);
};

let arr = [1, 3, 5, 19, 3, 8, 10, 3, 4, 5];
Calc(arr, 10);
//RESULT =42
