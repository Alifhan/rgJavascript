function countryMedals(players, countries) {
  let result = [];
  if (countries == undefined) {
    return "Countries not provided";
  }
  for (let index = 0; index < countries.length; index++) {
    const country = countries[index];
    const countryGroup = {
      name: country,
      athlete: [],
      totalMedals: 0,
    };
    for (let j = 0; j < players.length; j++) {
      if (country === players[j].country) {
        countryGroup.totalMedals += players[j].medals;
        countryGroup.athlete.push(players[j].name);
      }
    }
    result.push(countryGroup);
  }

  return result;
}

let playerData = [
  {
    name: "Lionel Messi",
    medals: 5,
    country: "Argentina",
  },
  {
    name: "Iker Casillas",
    medals: 7,
    country: "Spain",
  },
  {
    name: "Ahmad Waluyo",
    medals: 5,
    country: "Indonesia",
  },
  {
    name: "Alvin Arkansas",
    medals: 8,
    country: "Indonesia",
  },
  {
    name: "Gabriel Batistuta",
    medals: 1,
    country: "Argentina",
  },
  {
    name: "Xavi Hernandes",
    medals: 9,
    country: "Spain",
  },
  {
    name: "Carles Puyol",
    medals: 5,
    country: "Spain",
  },
  {
    name: "Jatmika Teja",
    medals: 6,
    country: "Indonesia",
  },
  {
    name: "Sergio Aguero",
    medals: 3,
    country: "Argentina",
  },
];

console.log(countryMedals(playerData, ["Indonesia", "Spain"]));
console.log(countryMedals(playerData, ["Argentina", "Spain"]));
console.log(countryMedals(playerData, ["Indonesia", "Argentina"]));
console.log(countryMedals(playerData));

module.exports = countryMedals;
