const { SQS } = require("aws-sdk");
const {
  createVoucher,
} = require("./services/afip/createVoucher/createVoucher");
const { createResponse } = require("./utils/createResponse");
const sqs = new SQS({ apiVersion: "2012-11-05" });
const { QUEUE_URL } = require("./config/config");

exports.handler = async (event, _context, callback) => {
  const { body } = event.Records[0];
  try {
    const result = await createVoucher(JSON.parse(body));
    const params = {
      MessageBody: JSON.stringify(result),
      QueueUrl: QUEUE_URL,
    };
    await sqs.sendMessage(params).promise();
    callback(
      null,
      createResponse(200, {
        code: 0,
        message: "Mensaje puesto en cola exitosamente.",
      })
    );
  } catch (err) {
    console.log("Err", err);
    callback(
      createResponse(500, {
        code: 500,
        message: "Error al crear el voucher",
      }),
      null
    );
  }
};
