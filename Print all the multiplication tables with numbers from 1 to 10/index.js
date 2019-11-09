//Print all the multiplication tables with numbers from 1 to 10

const multiplyTenTimes = x => {
  for (let i = 1; i <= 10; i++) {
    let table = `${x} * ${i} = ${x * i}`;
    console.log(table);
  }
};

multiplyTenTimes(5);
