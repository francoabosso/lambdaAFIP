const addZerosPadding = (paddingNumber, number) => {
  return ('0'.repeat(paddingNumber) + String(number)).slice(-paddingNumber);
};

module.exports = { addZerosPadding };
