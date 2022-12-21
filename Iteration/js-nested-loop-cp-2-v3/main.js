function deretanAngkaHinggaN(n) {
  let count = 1;
  let angka = n - count;
  let result = "";
  if (n <= 2) {
    return "Incorrect param";
  }
  for (angka; angka > 0; angka--) {
    if (angka == 1) {
      result += angka;
      angka = n - count;
      count += 1;
    } else {
      result += angka;
    }
  }
  return result;
}

console.log(deretanAngkaHinggaN(5));

module.exports = deretanAngkaHinggaN;
