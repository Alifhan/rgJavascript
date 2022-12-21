function countAndSum(number) {
  let nilai = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 3 == 0) nilai += 3;
    else nilai += i % 3;
  }
  return nilai;
}

console.log(countAndSum(5)); // 9
console.log(countAndSum(10)); // 19
console.log(countAndSum(100)); // 199
console.log(countAndSum(17)); // 33
console.log(countAndSum(19)); // 0

module.exports = countAndSum;
