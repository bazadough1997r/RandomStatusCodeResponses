const express = require('express');
const randomStatusCodes = require('./randomStatusCodes');
const landPage = require('./landPage');

const router = express.Router();

router.use('/', landPage);

router.use('/random-status-code', randomStatusCodes);

module.exports = router;
