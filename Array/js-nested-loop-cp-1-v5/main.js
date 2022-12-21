function buyThemAll(books, budget) {
  splitBuku = books.split(",");
  let hasil = [];
  let total_buku = 0;
  let judul = [];
  let harga_buku = [];
  let total_harga = 0;

  if (budget === 0) {
    return `Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ${budget}.`;
  } else {
    for (let i = 0; i < splitBuku.length; i++) {
      splitnama_harga_buku = splitBuku[i].split(":");
      hasil.push(splitnama_harga_buku);
    }

    for (let j = 0; j < hasil.length; j++) {
      if (budget - total_harga < parseInt(hasil[j][1])) continue;
      else {
        if (budget - total_harga < parseInt(hasil[j][1])) break;
        else if (budget - total_harga > parseInt(hasil[j][1])) {
          total_buku++;
          judul.push(hasil[j][0]);
          total_harga = total_harga + parseInt(hasil[j][1]);
          shoopingReturn = budget - total_harga;
        }
      }
    }
    if (total_buku === 0) {
      return `Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ${budget}.`;
    }
    return `Afista membeli ${total_buku} buku yaitu ${judul.join(", ")}. Total belanja ${total_harga}, sisa uang Afista adalah ${shoopingReturn}.`;
  }
}

// console.log(buyThemAll('The Alchemist:55000,The Hobit:20000,The Power of Habit:10000', 100000)); //Afista membeli 3 buku yaitu The Alchemist, The Hobit, The Power of Habit. Total belanja 85000, sisa uang Afista adalah 15000.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 300000)); // Afista membeli 2 buku yaitu Javascript itu asik, Belajar HTML5. Total belanja 221200, sisa uang Afista adalah 78800.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 20000)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 20000.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 0)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 0.

console.log(buyThemAll("The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000", 200000)); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.

module.exports = buyThemAll;
