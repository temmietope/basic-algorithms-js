//Function that converts a decimal input to binary

const decToBin = decimal => {
  let remainder = [];

  while (decimal > 0) {
    let rem = decimal % 2;
    remainder.unshift(rem);
    decimal = Math.floor(decimal / 2);
  }

  let binary = remainder.join("");
  console.log(binary);
};

decToBin(37);
//RESULT: 100101
