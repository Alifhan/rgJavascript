function vocalCounter(array) {
  var jumlah_vokal = 0;
  let huruf = "aeiouAEIOU";
  let tampung = "";

  for (var i = 0; i < array.length; i++) {
    if (huruf.indexOf(array[i]) != -1) {
      tampung += array[i];
      jumlah_vokal++;
    }
  }
  if (jumlah_vokal > 0) {
    return `Jumlah vokal yang ditemukan sebanyak ${jumlah_vokal} berupa ${tampung}`;
  } else {
    return `Tidak ada huruf vokal yang ditemukan`;
  }
}

console.log(vocalCounter(["x", "A", 5, "o", 1, "T", "b"]));
console.log(vocalCounter([-10, "E", "e", "z", "p", "i", 4]));
console.log(vocalCounter(["q", "W", "r", "t", "Y"]));

module.exports = vocalCounter;
