const { createIvaList } = require('./createIvaList');
const { getToday } = require('./getToday');
const { parseDateToInt } = require('./parseDateToInt');

const preprocessAFIPData = (data) => {
  const { fields, line_items, FchServDesde, FchServHasta, FchVtoPago } = data;
  return {
    ...fields,
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
