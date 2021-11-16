const { getToday } = require("./getToday");

const encodeQR = (CUIT, data, AfipResponse) => {
  // Example of QRData = {
  //   ver: 1,
  //   fecha: '2021-01-05',
  //   cuit: 30711565732,
  //   ptoVta: 2,
  //   tipoCmp: 1,
  //   nroCmp: 244,
  //   importe: 1604.46,
  //   moneda: 'DOL',
  //   ctz: 89.5,
  //   tipoDocRec: 80,
  //   nroDocRec: 30708403969,
  //   tipoCodAut: 'E',
  //   codAut: 71012909888163,
  // };

  const QRData = {
    ver: 1,
    fecha: getToday(),
    cuit: CUIT,
    ptoVta: data._PtoVta,
    tipoCmp: data._CbteTipo,
    nroCmp: AfipResponse.voucherNumber,
    importe: data.ImpTotal,
    moneda: data.MonId,
    ctz: data.MonCotiz,
    tipoDocRec: 80,
    nroDocRec: data.DocNro,
    tipoCodAut: "E",
    codAut: AfipResponse.CAE,
  };

  return Buffer.from(JSON.stringify(QRData)).toString("base64");
};

module.exports = {
  encodeQR,
};
