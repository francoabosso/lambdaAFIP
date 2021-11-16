/*
  (1) Factura A
  (6) Factura B
  (11) Factura C
  (201) Factura de crêdito A
  (19) Factura de Exportación
*/
/*
  (3) Nota de crédito A
  (8) Nota de crédito B
  (13) Nota de crédito C
  (2) Nota de débito A
  (7) Nota de débito B
  (12) Nota de débito C
*/

const invoiceTypeIds = {
  1: "FEA", // Factura A
  6: "FEB", // Factura B
  11: "FEC", // Factura C
  201: "FCEA", // Factura de crédito A
  19: "FEE", // Factura E
  3: "NCA", // Nota de crédito A
  8: "NCB", // Nota de crédito B
  13: "NCC", // Nota de crédito C
  2: "NDA", // Nota de débito A
  7: "NDB", // Nota de débito B
  12: "NDC", // Nota de débito C
};

module.exports = {
  invoiceTypeIds,
};
