function travelDiscount(id, amount) {
  var status1 = "STUDENT";
  var status2 = "CORPORATE";
  var price = 0;
  var price2 = 0;
  let code1 = id.includes("STD");
  let code2 = id.includes("CORP");

  if (code1 == true) {
    if (amount > 20) {
      price = amount * 20000;
      var total_harga = 0;
      var discount = 0;
      disc = (20 / 100) * price;
      total_harga = price - disc;
      return "Selamat! Voucher untuk " + status1 + " dengan id " + id + " berhasil di redeem, total yang harus dibayarkan sebesar Rp. " + total_harga + ".";
    } else if (amount <= 20) {
      price = amount * 20000;
      return "Selamat! Voucher untuk " + status1 + " dengan id " + id + " berhasil di redeem, total yang harus dibayarkan sebesar Rp. " + price + ".";
    } else {
      return "Maaf, voucher yang anda miliki tidak valid!";
    }
  }

  if (code2 == true) {
    if (amount > 30) {
      price2 = amount * 50000;
      var total_harga2 = 0;
      var discount2 = 0;
      discount2 = (25 / 100) * price2;
      total_harga2 = price2 - discount2;
      return "Selamat! Voucher untuk " + status2 + " dengan id " + id + " berhasil di redeem, total yang harus dibayarkan sebesar Rp. " + total_harga2 + ".";
    } else if (amount <= 30) {
      price2 = amount * 50000;
      return "Selamat! Voucher untuk " + status2 + " dengan id " + id + " berhasil di redeem, total yang harus dibayarkan sebesar Rp. " + price2 + ".";
    } else {
      return "Maaf, voucher yang anda miliki tidak valid!";
    }
  } else {
    return "Maaf, voucher yang anda miliki tidak valid!";
  }
}

console.log(travelDiscount("STD9845-8461-121", 11));
console.log(travelDiscount("CORP8135-4612-912", 30));
console.log(travelDiscount("STD7601-639-184", 36));
console.log(travelDiscount("CORP5611-8456-999", 31));
console.log(travelDiscount("8347-7-9124365", 99));
console.log(travelDiscount("XYZ8135461-2-912", 1));

module.exports = travelDiscount;
