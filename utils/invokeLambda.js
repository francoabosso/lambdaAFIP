const AWS = require("aws-sdk");
const lambda = new AWS.Lambda();

exports.invokeLambda = (lambdaName) => {
  let promise = new Promise((resolve, reject) => {
    lambda.invoke(
      {
        FunctionName: lambdaName,
        Payload: null,
      },
      (err, data) => {
        console.log(data);
        let payload = JSON.parse(data.Payload);
        if (data.StatusCode != 200) {
          reject(payload);
        } else {
          resolve(payload);
        }
      }
    );
  });
  return promise;
};
