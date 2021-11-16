const { addZerosPadding } = require("./addZerosPadding");
const { encodeQR } = require("./encodeQR");
const { getTaxpayerType } = require("./getTaxpayerType");
const { renameInvoiceTypeIds } = require("./renameInvoiceTypeIds");

const generatePayloadZB = (CUIT, { input, AFIPResponse, AFIPData }) => {
  const {
    fields: { PtoVta, CbteTipo },
  } = input;
  const { CAE, CAEFchVto, voucherNumber } = AFIPResponse;
  const { Iva } = AFIPData;

  const PtoVtaPadding = addZerosPadding(5, PtoVta);
  const NumeroCompPadding = addZerosPadding(8, voucherNumber);
  const NumeroFact = `FE${renameInvoiceTypeIds(
    CbteTipo
  )}${PtoVtaPadding}-${NumeroCompPadding}`;

  const CAEVencimiento = CAEFchVto.split("-").reverse().join("/");
  const EncodedQRData = encodeQR(
    CUIT,
    { ...AFIPData, CbteTipo, PtoVta },
    AFIPResponse
  );
  const IVAComprador = getTaxpayerType(Iva);
  const payload = {
    invoice_number: NumeroFact,
    custom_fields: [
      { label: "Punto de venta", value: PtoVtaPadding },
      { label: "Número de comprobante", value: NumeroCompPadding },
      { label: "Condición frente al IVA (comprador)", value: IVAComprador },
      { label: "CAE", value: CAE },
      { label: "Fecha de vto de CAE", value: CAEVencimiento },
      { label: "EncodedQRData", value: EncodedQRData },
    ],
  };

  return payload;
};

module.exports = {
  generatePayloadZB,
};
