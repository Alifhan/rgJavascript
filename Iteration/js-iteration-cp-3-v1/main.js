function printNumber(totalNumber) {
  let angka = "";
  for (let i = 1; i <= totalNumber; i++) {
    if (i % 3 == 0) angka += 3;
    else angka += i % 3;
  }
  return angka;
}
// 4, 7, 10
console.log(printNumber(2));
console.log(printNumber(3));
console.log(printNumber(6));
console.log(printNumber(10));
console.log(printNumber(30));

module.exports = printNumber;
