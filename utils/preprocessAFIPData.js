const { createIvaList } = require("./createIvaList");
const { getToday } = require("./getToday");
const { parseDateToInt } = require("./parseDateToInt");

const preprocessAFIPData = (data) => {
  const { fields, line_items, FchServDesde, FchServHasta, FchVtoPago } = data;
  const { ImpTotal, ImpTotConc, ImpNeto, ImpOpEx, ImpIVA, ImpTrib } = fields;
  return {
    ...fields,
    ImpTotal: ImpTotal.toFixed(2),
    ImpTotConc: ImpTotConc.toFixed(2),
    ImpNeto: ImpNeto.toFixed(2),
    ImpOpEx: ImpOpEx.toFixed(2),
    ImpIVA: ImpIVA.toFixed(2),
    ImpTrib: ImpTrib.toFixed(2),
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
