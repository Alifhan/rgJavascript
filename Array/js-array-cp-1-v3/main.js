function splitToArr(str) {
  if (str === "") {
    return "Data not available";
  } else if (typeof str != "undefined" && str.length >= 0) {
    var arrayKosong = [];

    let splitsnya = str.split(/;|-/);
    for (let index = 0; index < splitsnya.length; index++) {
      var cekk = splitsnya[index].charAt(0).toUpperCase() + splitsnya[index].slice(1);
      arrayKosong.push(cekk);
    }
    return arrayKosong;
  } else if (typeof str === "undefined") {
    return "Invalid input";
  }
}

console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"));
console.log(splitToArr("ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"));
console.log(splitToArr(""));
console.log(splitToArr());

module.exports = splitToArr;
