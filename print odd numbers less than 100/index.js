//QUESTION 2: Print the odd numbers less than 100

for (let x = 0; x <= 100; x++) {
  if (x % 2 === 0) {
    continue;
  } else console.log(x);
}

//OR

for (let x = 1; x <= 100; x += 2) {
  console.log(x);
} //shorter solution
