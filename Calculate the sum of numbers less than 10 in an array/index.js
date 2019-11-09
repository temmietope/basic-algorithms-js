//Calculate the sum of numbers less than 10 in an array


//SOLUTION

//Function
const Calc = input => {
  if (!Array.isArray(input)) {  //Check if argument passed is an array
    return console.log("Pass in an array");  //Return if not an array
  }
  const newArray = input.filter(a => a <= 10);  // filter out elements of the array greater than 10

  const reducer = (accumulator, currentValue) => accumulator + currentValue;  //Create a reducer function
  const sum = newArray.reduce(reducer);
  return console.log(sum);
};


let arr = [1, 3, 5, 19, 3, 8, 10, 3, 4, 5];
Calc(arr);
 //RESULT =42