function kelvinToCelsius(kelvin) {
  let kelvinKeCelcius = kelvin - 273.15;
  let nilai = Number(kelvinKeCelcius.toFixed(2));
  let res = String(kelvinKeCelcius);
  let resString = res.split(".");
  if (resString.length == 1 || resString[1].length < 3) {
    nilai = nilai.toFixed(2);
  }

  let valueNumber = Number(nilai);

  return valueNumber;
}

function kelvinToFahrenheit(kelvin) {
  let kelvinKeFahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
  let nilai = Number(kelvinKeFahrenheit.toFixed(2));
  let res = String(kelvinKeFahrenheit);
  let resString = res.split(".");
  if (resString.length == 1 || resString[1].length < 3) {
    nilai = nilai.toFixed(2);
  }

  let valueNumber = Number(nilai);

  return valueNumber;
}

function celsiusToFahrenheit(celsius) {
  let celciusKeFahrenheit = celsius * 1.8 + 32;
  let nilai = Number(celciusKeFahrenheit.toFixed(2));
  let res = String(celciusKeFahrenheit);
  let resString = res.split(".");
  if (resString.length == 1 || resString[1].length < 3) {
    nilai = nilai.toFixed(2);
  }

  let valueNumber = Number(nilai);

  return valueNumber;
}

function celsiusToKelvin(celsius) {
  let celciusKeKelvin = celsius + 273.15;

  let nilai = Number(celciusKeKelvin.toFixed(2));
  let res = String(celciusKeKelvin);
  let resString = res.split(".");
  if (resString.length == 1 || resString[1].length < 3) {
    nilai = nilai.toFixed(2);
  }
  let valueNumber = Number(nilai);

  return valueNumber;
}

function fahrenheitToKelvin(fahrenheit) {
  // your code here
  let farhenheitKeKelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;
  let nilai = Number(farhenheitKeKelvin.toFixed(2));
  let res = String(farhenheitKeKelvin);
  let resString = res.split(".");
  if (resString.length == 1 || resString[1].length < 3) {
    nilai = nilai.toFixed(2);
  }
  let valueNumber = Number(nilai);

  return valueNumber;
}

function fahrenheitToCelsius(fahrenheit) {
  // your code herelet farhenheitKeCelcius = ((fahrenheit - 32) * 5) / 9;
  let fahrenheitKeCelcius = ((fahrenheit - 32) * 5) / 9;

  let nilai = Number(fahrenheitKeCelcius.toFixed(2));
  let res = String(fahrenheitKeCelcius);
  let resString = res.split(".");
  if (resString.length == 1 || resString[1].length < 3) {
    nilai = nilai.toFixed(2);
  }
  let valueNumber = Number(nilai);

  return valueNumber;
}
function convertTemperature(temperature, initialUnit, finalUnit) {
  if (initialUnit == "K") {
    if (finalUnit == "C") {
      const kelvinCelcius = kelvinToCelsius(temperature);
      return kelvinCelcius;
    } else if (finalUnit == "F") {
      const kelvinFahrenheit = kelvinToFahrenheit(temperature);
      return kelvinFahrenheit;
    }
  }
  if (initialUnit == "C") {
    if (finalUnit == "F") {
      const celciusFahrenheit = celsiusToFahrenheit(temperature);
      return celciusFahrenheit;
    } else if (finalUnit == "K") {
      const celciusKelvin = celsiusToKelvin(temperature);
      return celciusKelvin;
    }
  }
  if (initialUnit == "F") {
    if (finalUnit == "C") {
      const fahrenheitCelcius = fahrenheitToCelsius(temperature);
      return fahrenheitCelcius;
    } else if (finalUnit == "K") {
      const fahrenheitKelvin = fahrenheitToKelvin(temperature);

      return fahrenheitKelvin;
    }
  }
}

console.log(convertTemperature(0, "C", "K")); // 273.15
console.log(convertTemperature(0, "C", "F")); // 32

console.log(convertTemperature(0, "F", "C")); // -17.78
console.log(convertTemperature(0, "F", "K")); // 255.37

console.log(convertTemperature(0, "K", "C")); // -273.15
console.log(convertTemperature(0, "K", "F")); // -459.67

module.exports = {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToKelvin,
  fahrenheitToCelsius,
  convertTemperature,
};
