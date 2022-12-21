function calculate(number1, number2, callback) {
  let test1 = setTimeout(() => {
    if (number1 % 2 == 0 && number2 % 2 == 0) {
      callback(number1 - number2);
    }
  }, 2000);

  let test2 = setTimeout(() => {
    if (number1 % 2 == 0 && number2 % 2 !== 0) {
      callback(number1 + number2);
    }
  }, 2000);

  let test3 = setTimeout(() => {
    if (number1 % 2 !== 0) {
      callback(number1 * number2);
    }
  }, 2000);
}
calculate(3, 4, (callback) => {
  console.log(callback);
});

module.exports = calculate;
