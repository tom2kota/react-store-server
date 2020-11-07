const express = require('express');
const router = express.Router();

/* GET payment API */
router.get('/', function (req, res, next) {
    res.send('Payment API');
});

module.exports = router;
