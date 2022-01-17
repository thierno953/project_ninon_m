const express = require('express');
const { createPin, getAllPin, getPinDetail } = require('../controllers/pinController');

const router = express.Router();

router.route("/pin/new").post(createPin);
router.route("/pins").get(getAllPin);
router.route("/pin/:id").get(getPinDetail);


module.exports = router;