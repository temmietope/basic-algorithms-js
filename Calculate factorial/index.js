//Calculate factorial

const factorial = x => {
  let fac = x;
  for (let i = x - 1; i >= 1; i--) {
    fac *= i;
  }
  console.log(fac);
};

factorial=(10);
//RESULT = 3628800
