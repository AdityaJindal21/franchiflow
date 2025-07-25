var express = require('express')
var formRouter = express.Router();

var obj = require('../controller/formController');

formRouter.post('/saveuser',obj.doSaveUser);

module.exports = formRouter;