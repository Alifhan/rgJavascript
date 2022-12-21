function rekapSalesByName(data, correction) {
    correction.forEach((item) => {
      let newArray = item;
      if (newArray.type === "koreksi") {
        for (let j = 0; j < data.length; j++) {
          if (newArray.salesDate === data[j].salesDate && newArray.salesName === data[j].salesName) {
            data[j].totalSales = newArray.totalSales;
          }
        }
      } else if (newArray.type === "tambah") {
        delete newArray.type;
        data.push(newArray);
      }
    });
    return data;
  
  }
  
  function getbestSalesman(orderedName) {
    const totalPenjualanTerbanyak = Object.values(orderedName);
    const penjualanTerbanyak = Math.max(...totalPenjualanTerbanyak);
    const salesRajin = Object.keys(orderedName).reduce((nama1, nama2) => (orderedName[nama1] > orderedName[nama2] ? nama1 : nama2));
    //   let salesByname = rekapSalesByName(data);
    let bestSalesman = "Penjualan terbanyak dilakukan oleh " + salesRajin + " dengan total penjualan dalam 1 bulan sebesar " + penjualanTerbanyak;   
    return bestSalesman;
  }
  
  function salesReport(data, correction) {
    let getmonthlySales = "";
    let gettotalSalesByName = "";
    let allSales = ["Adi", "Budi", "Poltak", "Sri", "Udin"];
    let totalResult = [];
    let arrayNama = [];
  
    let arraytotalSales = [];
    const getNamenTotal = [];
    const mainData = rekapSalesByName(data, correction);
  
    const ListName = mainData.reduce((result, current) => {
      result[current.salesName] = result[current.salesName] || [];
      result[current.salesName].push(current.totalSales);
      arraytotalSales.push(current.totalSales);
      return result;
    }, {});
  
    //Menjumlahkan penjualan seluruh sales
    const entryName = Object.values(ListName);
    for (let i = 0; i < entryName.length; i++) {
      let sumValues = entryName[i].reduce((total, index) => {
        return total + index;
      });
  
      totalResult.push({
        [Object.keys(ListName)[i]]: sumValues,
      });
    }
    for (let i = 0; i < totalResult.length; i++) {
      const totalValue = Object.keys(totalResult[i]);
      arrayNama.push(...totalValue);
    }
    let filterName = allSales.filter((element) => {
      return !arrayNama.includes(element);
    });
    for (let i = 0; i < filterName.length; i++) {
      totalResult.push({
        [filterName[i]]: 0,
      });
    }
    let sortName = Object.assign({}, ...totalResult);
    const orderedName = Object.keys(sortName)
      .sort()
      .reduce((obj, key) => {
        obj[key] = sortName[key];
        return obj;
      }, {});
  
    getmonthlySales = arraytotalSales.reduce((result, index) => {
      return result + index;
    });
    return {
      monthlySales: getmonthlySales,
      totalSalesByName: orderedName,
      bestSalesman: getbestSalesman(orderedName),
    };
  

  }
  
  // test 1
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
      salesName: "Adi",
      totalSales: 100,
      salesDate: 2,
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
  console.log(salesReport(data, correction));
  // end test 1
  
  module.exports = {
    salesReport,
  };
  