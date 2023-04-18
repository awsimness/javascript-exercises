const convertToCelsius = function(temp) {
  let converted=(temp-32)*0.5556
  if (converted===0) {
    return converted
  }
  else {
    return +converted.toFixed(1)
  }
};

const convertToFahrenheit = function(temp) {
  let converted=(temp*1.8)+32
  if (converted===0) {
    return converted
  }
  else {
    return +converted.toFixed(1)
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
