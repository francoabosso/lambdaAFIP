const { createIvaList } = require("./createIvaList");
const { getToday } = require("./getToday");
const { parseDateToInt } = require("./parseDateToInt");

const preprocessAFIPData = (data) => {
  const { fields, line_items, FchServDesde, FchServHasta, FchVtoPago } = data;
  const { ImpTotal, ImpNeto, ImpIVA } = fields;
  return {
    ...fields,
    PtoVta: 4,
    ImpTotal: ImpTotal.toFixed(2),
    ImpNeto: ImpNeto.toFixed(2),
    ImpIVA: ImpIVA.toFixed(2),
    CbteFch: parseDateToInt(getToday()),
    FchServDesde: parseDateToInt(FchServDesde),
    FchServHasta: parseDateToInt(FchServHasta),
    FchVtoPago: parseDateToInt(FchVtoPago),
    Iva: createIvaList(line_items),
  };
};

module.exports = {
  preprocessAFIPData,
};
