function convertItems(items) {
  var itemToarr = [];
  for (let i = 0; i < items.length; i++) {
    itemToarr.push(items[i].split("|"));
  }
  return itemToarr;
}

function filterItems(items) {
  var filter = items.filter((arr) => arr.length === 3);
  for (let i = 0; i < filter.length; i++) {
    filter[i][1] = parseInt(filter[i][1]);
  }

  return filter;
}

function generateSpareParts(items) {
  var outputGen = [];
  for (let i = 0; i < items.length; i++) {
    let toObj = {
      name: items[i][0],
      price: items[i][1],
      category: items[i][2],
    };
    outputGen.push(toObj);
  }
  return outputGen;
}

function itemsStatistics(items) {
  var itemsStatistics = filterItems(items);
  let countCategory = {};
  let allCategory = [];
  for (let i = 0; i < itemsStatistics.length; i++) {
    allCategory.push(itemsStatistics[i][2]);
  }
  allCategory.forEach(function (x) {
    countCategory[x] = (countCategory[x] || 0) + 1;
  });
  return countCategory;
}

function generateItemsData(items) {
  let generate = {
    spare_parts: generateSpareParts(filterItems(convertItems(items))),
    statistics: itemsStatistics(convertItems(items)),
  };

  return generate;
}

const items = [
  "Spakbor Gordon|150000|variation",
  "Head Lamp",
  "USD KX150|8500000|bodyParts",
  "Handle Expedition|275000|variation",
  "Karet Body",
  "Body set KTM|1899950|bodyParts",
  "Jok Gordon|250000|variation",
  "Behel Bodyset Gordon",
  "CDI BRT KLX|625000|electricity",
  "Cover jok KLX|185000|variation",
];

console.log(generateItemsData(items));

module.exports = {
  convertItems,
  filterItems,
  generateSpareParts,
  itemsStatistics,
  generateItemsData,
};
