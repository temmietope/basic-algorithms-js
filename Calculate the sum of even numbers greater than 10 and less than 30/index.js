//Calculate the sum of even numbers greater than 10 and less than 30

let sum = 0;
for (x = 11; x < 30; x++) {
  if (x % 2 === 0) {
    sum += x;
  }
  continue;
}
console.log(sum);
