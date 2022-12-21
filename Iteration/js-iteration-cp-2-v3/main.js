function trasureHunter(dailyLog) {
  // TODO: replace this
  nilai = 0;

  for (i = 0; i < dailyLog.length; i++) {
    if (dailyLog[i] === "$") {
      nilai += 100;
    } else if (dailyLog[i] === "x") {
      if (nilai < 10) {
        nilai = 0;
      } else {
        nilai -= 10;
      }
    } else if (dailyLog[i] === "#") {
      if (nilai == 0) {
        nilai = 0;
      } else {
        nilai = nilai * 0.5;
      }
    }
  }
  return nilai;
}

console.log(trasureHunter("$x$#x$")); // 185
console.log(trasureHunter("$$#x$$")); // 290
console.log(trasureHunter("x$#x$#x$")); // 157.5
console.log(trasureHunter("xx$#$#$#$###xx")); // 3.125

module.exports = trasureHunter;
