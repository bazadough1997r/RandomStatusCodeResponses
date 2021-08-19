const { StatusCodes } = require('http-status-codes');
const { randomStatusCodes } = require('../../services');
const { logger } = require('../../utils');

const randomStatusCode = async (req, res) => {
  const randomStatus = await randomStatusCodes.statusPicked();
  // console.log(randomStatus);
  try {
    if (!randomStatus) {
      return res.status(StatusCodes.NO_CONTENT).send();
    }
    return res.status(randomStatus[0]).send(randomStatus);
  } catch (error) {
    logger.error(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
    });
  }
};

module.exports = {
  randomStatusCode,
};
