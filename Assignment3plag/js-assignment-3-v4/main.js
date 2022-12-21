function rekapSalesByName(data, name) {}

function salesReport(data, correction) {
  let jumlahBulan = [];
  let Arrsalesmonth = [];
  let totalData = [];

  for (let index = 0; index < correction.length; index++) {
    let koreksi = correction[index];
    if (koreksi.type === "koreksi") {
      for (let j = 0; j < data.length; j++) {
        if (koreksi.salesDate === data[j].salesDate && koreksi.salesName === data[j].salesName) {
          data[j].totalSales = koreksi.totalSales;
        }
      }
    } else if (koreksi.type === "tambah") {
      delete koreksi.type;
      data.push(koreksi);
    }
  }
  let namaSales = [];

  const name = data.reduce((result, current) => {
    result[current.salesName] = result[current.salesName] || [];
    result[current.salesName].push(current.totalSales);
    Arrsalesmonth.push(current.totalSales);
    return result;
  }, {});

  const valueSales = Object.values(name);
  const salesKey = Object.keys(name);
  let sumTotal = Arrsalesmonth.reduce((result, index) => {
    return result + index;
  });

  for (let index = 0; index < valueSales.length; index++) {
    let jumlahTotal = valueSales[index].reduce((result, index) => {
      return result + index;
    });

    totalData.push({
      [salesKey[index]]: jumlahTotal,
    });
  }

  let Name = [];
  for (let index = 0; index < totalData.length; index++) {
    const totalNilai = Object.keys(totalData[index]);
    Name.push(...totalNilai);
  }
  let nameAll = ["Adi", "Budi", "Poltak", "Sri", "Udin"];

  let filterNama = nameAll.filter((element) => {
    return !Name.includes(element);
  });
  for (let index = 0; index < filterNama.length; index++) {
    totalData.push({
      [filterNama[index]]: 0,
    });
  }

  let urutNama = Object.assign({}, ...totalData);
  const byName = Object.keys(urutNama)
    .sort()
    .reduce((Objek, key) => {
      Objek[key] = urutNama[key];
      return Objek;
    }, {});

  let totalNilai = Object.values(byName);
  let totalMax = Math.max(...totalNilai);

  let salesTerbanyak = Object.keys(byName).reduce((a, b) => {
    if (byName[a] > byName[b]) {
      return a;
    } else {
      return b;
    }
  });

  let toObjek = {
    monthlySales: sumTotal,
    totalSalesByName: byName,
    bestSalesman: "Penjualan terbanyak dilakukan oleh " + salesTerbanyak + " dengan total penjualan dalam 1 bulan sebesar " + totalMax,
  };
  return toObjek;
}

data = [
  {
    salesName: "Udin",
    totalSales: 100,
    salesDate: 1,
  },
  {
    salesName: "Poltak",
    totalSales: 100,
    salesDate: 1,
  },
  {
    salesName: "Poltak",
    totalSales: 50,
    salesDate: 2,
  },
  {
    salesName: "Adi",
    totalSales: 100,
    salesDate: 1,
  },
  {
    salesName: "Sri",
    totalSales: 100,
    salesDate: 1,
  },
];
correction = [
  {
    type: "tambah",
    salesName: "Udin",
    totalSales: 100,
    salesDate: 2,
  },
  {
    type: "tambah",
    salesName: "Adi",
    totalSales: 50,
    salesDate: 2,
  },
];
data2 = [
  {
    salesName: "Udin",
    totalSales: 100,
    salesDate: 1,
  },
  {
    salesName: "Poltak",
    totalSales: 100,
    salesDate: 1,
  },
  {
    salesName: "Poltak",
    totalSales: 50,
    salesDate: 2,
  },
];
correction2 = [
  {
    type: "tambah",
    salesName: "Udin",
    totalSales: 100,
    salesDate: 2,
  },
  {
    type: "koreksi",
    salesName: "Udin",
    totalSales: 20,
    salesDate: 2,
  },
  {
    type: "tambah",
    salesName: "Adi",
    totalSales: 50,
    salesDate: 2,
  },
  {
    type: "koreksi",
    salesName: "Adi",
    totalSales: 10,
    salesDate: 2,
  },
];
module.exports = {
  salesReport,
};
console.log(salesReport(data, correction));
console.log(salesReport(data2, correction2));
