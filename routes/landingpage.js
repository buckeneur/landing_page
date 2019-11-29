var express = require('express');
var router = express.Router();

var landingpage_controller = require('../controllers/landingpageController');

router.get('/', landingpage_controller.index);

module.exports = router;