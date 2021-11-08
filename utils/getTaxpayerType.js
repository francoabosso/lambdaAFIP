const { aliquots } = require("./dictionaries/aliquots");

const getTaxpayerType = (list) => {
  const uniqueAliquot = list.length === 1;
  if (uniqueAliquot && list[0].Id === aliquots["0"]) {
    return "IVA Exento";
  }
  return "IVA Responsable Inscripto";
};

module.exports = {
  getTaxpayerType,
};
