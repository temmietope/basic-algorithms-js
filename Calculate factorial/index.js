//Calculate factorial

const percentile = x => {
  let perc = x;
  for (let i = x - 1; i >= 1; i--) {
    perc *= i;
  }
  console.log(perc);
};

percentile(10);
//RESULT = 3628800
