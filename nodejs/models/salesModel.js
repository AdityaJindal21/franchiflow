var mongooes = require('mongoose')

function getSalesModel()
{
    var salesscheema = mongooes.Schema;
    
    var salesCollectionSchema = {
        emailid:{type:String, required:true, index:true},
        date:{type: Date,  default: Date.now },
        totsales: {type: Number},
        totcustomer:{type: Number},
    }
    var version={
        versionkey:false
    }
    var SalescolScheema = new salesscheema(salesCollectionSchema,version);
    
    var Salescolref = mongooes.model("SalesData",SalescolScheema);
    return Salescolref;
}

module.exports = {getSalesModel}