const Afip = require("@afipsdk/afip.js");
const { preprocessAFIPData } = require("../../../utils/preprocessAFIPData");
const { generatePayloadZB } = require("../../../utils/generatePayloadZB");
const { EFS_PATH } = require("../../../config/config");

const createVoucher = async (input) => {
  // ToDo: check here about status field coming from ZB

  const afip = new Afip({
    CUIT: Number(process.env.CUIT),
    ta_folder: EFS_PATH,
    // production: true,
    // cert: 'cert_prod',
    // key: 'key_prod',
  });

  const AFIPData = preprocessAFIPData(input);

  const AFIPResponse = await afip.ElectronicBilling.createNextVoucher(AFIPData);

  console.log("Finished with createNextVoucher");

  const { invoice_id } = input;
  const payload = generatePayloadZB(process.env.CUIT, {
    input,
    AFIPResponse,
    AFIPData,
  });

  return { invoice_id, payload };
};

module.exports = { createVoucher };
