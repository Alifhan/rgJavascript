function travelSeat(passengers, seatColumn) {
  if (seatColumn <= 0) {
    return "Invalid number";
  } else if (passengers.length === 0) {
    return "Oops! tickets not sold!";
  } else {
    let seat = [];
    let urut_pasenger = passengers.sort();

    for (var i = 0; i < passengers.length; i += seatColumn) {
      let splitSeat = passengers.slice(i, i + seatColumn);
      seat.push(splitSeat);
      while (splitSeat.length % seatColumn != 0) {
        const kursi_tersedia = "Seat available";
        splitSeat.push(kursi_tersedia);
      }
    }
    return seat;
  }
}

console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 2));
console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
console.log(travelSeat([], 4));

module.exports = travelSeat;
