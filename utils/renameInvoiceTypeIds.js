const { invoiceTypeIds } = require("./dictionaries/invoiceTypeIds");

const renameInvoiceTypeIds = (id) => {
  return invoiceTypeIds[id];
};

module.exports = {
  renameInvoiceTypeIds,
};
