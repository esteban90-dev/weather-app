function toCelsius(degrees) {
  return Number((((degrees) - 32) / 1.8).toFixed(2));
}

export default toCelsius;