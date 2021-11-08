const createResponse = (status, response) => {
  return {
    statusCode: status,
    body: JSON.stringify(response),
  };
};

module.exports = {
  createResponse,
};
