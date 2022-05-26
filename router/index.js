const express = require('express');
const router = express.Router();
const postcontroller = require('../controller/postcontrollers')

router.post('/', postcontroller);

module.exports = router;