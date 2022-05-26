const express = require('express');
const router = express.Router();
const getcontroller = require('../controller/getcontrollers');

router.get('/', getcontroller);

module.exports = router;