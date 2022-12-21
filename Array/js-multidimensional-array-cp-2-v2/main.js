function discountChecker(costumers, date) {
  let date_split = date.split("-");

  let result = [];

  for (let i = 0; i < costumers.length; i++) {
    let price = costumers[i][0].split("$ ");
    let show = date_split[0];

    if (costumers[i].includes("member")) {
      result.push(costumers[i]);
    } else {
      if (parseInt(show) % 2 === 0 && parseInt(price[1]) % 2 === 0) {
        result.push(costumers[i]);
      } else if (parseInt(show) % 2 !== 0 && parseInt(price[1]) % 2 !== 0) {
        result.push(costumers[i]);
      }
    }
  }
  return result;
}

let costumers = [
  ["$ 228", "member"],
  ["$ 19", "non-member"],
  ["$ 238", "non-member"],
  ["$ 49", "member"],
];

console.log(discountChecker(costumers, "28-10-2022"));

var costumers2 = [
  ["$ 754", "member"],
  ["$ 233", "member"],
  ["$ 31", "non-member"],
  ["$ 332", "non-member"],
];

console.log(discountChecker(costumers2, "11-06-2022"));

module.exports = discountChecker;
