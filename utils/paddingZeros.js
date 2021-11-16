const paddingZeros = (paddingNumber, number) => {
  return ("0".repeat(paddingNumber) + String(number)).slice(-paddingNumber);
};

module.exports = {
  paddingZeros,
};
