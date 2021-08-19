const { StatusCodes } = require('http-status-codes');
const { logger } = require('../../utils');

const landPage = async (req, res) => {
  try {
    return res
      .status(StatusCodes.OK)
      .send('http://localhost:5000/random-status-code');
  } catch (error) {
    logger.error(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
    });
  }
};

module.exports = {
  landPage,
};
