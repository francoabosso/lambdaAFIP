const { aliquots } = require("./dictionaries/aliquots");
const createIvaList = (list) => {
  return list.reduce((ivaList, item) => {
    const Id = aliquots[item.tax_percentage.toString()];
    const idOnIvaList = ivaList.findIndex((obj) => obj.Id === Id);
    const BaseImp = item.item_total.toFixed(2);
    const Importe = ((BaseImp * item.tax_percentage) / 100.0).toFixed(2);
    if (idOnIvaList !== -1) {
      ivaList[idOnIvaList].BaseImp += BaseImp;
      ivaList[idOnIvaList].Importe += Importe;
      return ivaList;
    } else {
      return [
        ...ivaList,
        {
          Id,
          BaseImp,
          Importe,
        },
      ];
    }
  }, []);
};

module.exports = {
  createIvaList,
};
