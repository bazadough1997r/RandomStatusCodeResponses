const express = require('express');
const controller = require('./controller.js');

const router = express.Router();

router.get('/', controller.randomStatusCode);

module.exports = router;
