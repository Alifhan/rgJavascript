function counterApp(arr) {
  if (arr === undefined) {
    return "Invalid input";
  } else if (arr < 1) {
    return "Data not found";
  } else if (arr.length > 0) {
    return arr.reduce((countArray, Array) => {
      countArray[Array] = ++countArray[Array] || 1;
      return countArray;
    }, {});
  }
}

console.log(counterApp(["Hikman", "Naufal", "Kanda", "Arya", "Kanda", "Hikman", "Naufal", "Hikman", "Kanda", "Kanda"]));
console.log(counterApp([5, 6, 7, 5, 5, 7, 6, 7, 7, 7, 5, 6]));
console.log(counterApp([]));
console.log(counterApp());

module.exports = counterApp;
