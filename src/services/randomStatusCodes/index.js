const { StatusCodes } = require('http-status-codes');

const statusPicked = async () => {
  return Object.entries(StatusCodes)[Math.floor(Math.random() * 55)];
};

module.exports = {
  statusPicked,
};
