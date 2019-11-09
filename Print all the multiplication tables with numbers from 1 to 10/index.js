//Print all the multiplication tables with numbers from 1 to 10

const multiplyTenTimes = x => {
  for (let i = 1; i <= 10; i++) {
    let table = `${x} * ${i} = ${x * i}`;
    console.log(table);
  }
};

multiplyTenTimes(5);
//RESULT

// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// 5 * 5 = 25
// 5 * 6 = 30
// 5 * 7 = 35
// 5 * 8 = 40
// 5 * 9 = 45
// 5 * 10 = 50
