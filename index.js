const { SQS } = require('aws-sdk');
const { createVoucher } = require('./interactors/createVoucher/createVoucher');
const { createResponse } = require('./utils/createResponse');

const sqs = new SQS({ apiVersion: '2012-11-05' });
const { QUEUE_URL } = require('./config/config');

exports.handler = async (event, _context, callback) => {
  console.log('Event: ', event);
  const { body } = event.Records[0];
  try {
    const result = await createVoucher(JSON.parse(body));
    const params = {
      MessageBody: JSON.stringify(result),
      QueueUrl: QUEUE_URL,
    };
    const dataSQS = await sqs.sendMessage(params).promise();
    callback(
      null,
      createResponse(200, { result, MessageId: dataSQS.MessageId })
    );
  } catch (err) {
    console.log('Err', err);
    callback(createResponse(500, body), null);
  }
};
