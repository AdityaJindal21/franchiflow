var express = require('express')
var applicantRouter = express.Router();

var obj = require('../controller/formController');

applicantRouter.get('/allapplicants',obj.showall);
applicantRouter.post('/updateStatus',obj.updatestatus);

module.exports = applicantRouter;