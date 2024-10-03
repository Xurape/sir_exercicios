const express = require('express');
const router = express.Router();

const euromilhoesKeys = require('../controllers/euromilhoesKeys');

router.get('/generate', euromilhoesKeys.generateEuromilhoesKey);

module.exports = router;