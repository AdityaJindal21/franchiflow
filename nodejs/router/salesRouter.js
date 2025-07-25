var express = require('express')
var salesRouter = express.Router();

var obj = require('../controller/salesController');

salesRouter.post('/publishsales',obj.publishsales);
salesRouter.post('/retreivesales',obj.retreivesales)
salesRouter.get('/allsales',obj.allsales);
module.exports = salesRouter;