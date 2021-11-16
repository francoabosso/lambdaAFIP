const { KMS } = require("aws-sdk");
const decrypted = {};
const kms = new KMS({
  region: "us-east-1",
});
const functionName = process.env.AWS_LAMBDA_FUNCTION_NAME;

const decryptSecret = async (secretName) => {
  if (decrypted[secretName]) {
    return decrypted[secretName];
  }

  try {
    const req = {
      CiphertextBlob: Buffer.from(process.env[secretName], "base64"),
      EncryptionContext: { LambdaFunctionName: functionName },
    };
    const data = await kms.decrypt(req).promise();
    const decryptedVal = data.Plaintext.toString("ascii");
    decrypted[secretName] = decryptedVal;
    return decryptedVal;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  decryptSecret,
};
