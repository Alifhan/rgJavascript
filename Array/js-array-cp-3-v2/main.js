function dataSelection(data, amount, start) {
  if (typeof start === "string" || typeof amount === "string") {
    return "Invalid command";
  } else if (amount < 1) {
    return "Minimum amount is 1";
  } else if (start < 0) {
    return "Starting number cannot be below 0";
  } else if (data == "") {
    return "Data not found";
  } else {
    let result = data.slice(start - 1);
    if (amount != result.length) {
      i = result.length - amount;
      j = result.slice(0, i + 1);
      return j;
    }
    return result;
  }
}

console.log(dataSelection(["Semangka", "Nanas", "Jeruk", "Mengkudu", "Jambu klutuk"], 2, 3));
console.log(dataSelection(["Deny", "Ganjar", "Raam", "Imam", "Eddy", "Afis"], 4, 1));
console.log(dataSelection([97, 44, 21, 76, 10, 1, 33], 2, -1));
console.log(dataSelection(["Tegar", "Miranda", "Wulan"], 0, 3));
console.log(dataSelection(["Fauzan", "Uli", "Vika"], "1", "3"));
console.log(dataSelection([], 1, 3));

module.exports = dataSelection;
