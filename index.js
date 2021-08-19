const express = require('express');
const bodyParser = require('body-parser');
const { StatusCodes, getReasonPhrase } = require('http-status-codes');
const winston = require('winston');

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('testo passedo :3');
});

app.get('/random-status-code', async (req, res) => {
  const randomStatus = await Object.entries(StatusCodes)[
    Math.floor(Math.random() * 55)
  ];
  // ['407', 'PROXY_AUTHENTICATION_REQUIRED]
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
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
