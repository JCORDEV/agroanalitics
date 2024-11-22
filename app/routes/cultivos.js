var express = require('express');
var router = express.Router();
const cultivosController = require('../controllers').cultivosController;

/* GET home page. */
router.get('/', cultivosController.list);

module.exports = router;
