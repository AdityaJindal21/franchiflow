var {getSalesModel} = require('../models/salesModel')
var Salescolref = getSalesModel();

function publishsales(req,resp){
   
    console.log(req.body);
    var saleobj = new Salescolref(req.body);
    saleobj.save().then((documet)=>{
        resp.json({doc:documet,status:true,msg:"✅ Data Published Successfully!"});
    }).catch((err)=>{
        resp.json({status:false,msg:err.message});
    })
}

function retreivesales(req,resp)
{
    const { emailid, fromDate, toDate } = req.body;

    Salescolref.find({
        $and: [
          { emailid: emailid },
          {
            $and: [
              { date: { $gte: new Date(fromDate) } }, 
              { date: { $lte: new Date(toDate) } },   
            ]
          }
        ]
      })
        .then((salesData) => {
          if (salesData.length > 0) {
            resp.json({ status: true, sales: salesData});
          } else {
            resp.json({ status: false, msg: "No sales found for the given email and date range." });
          }
        })
        .catch((err) => {
          console.error(err);
          resp.json({ status: false, msg: "Error retrieving sales data: " + err.message });
        });
}

function allsales(req, resp) {
  Salescolref.find({ emailid: req.query.emailid })
    .sort({ date: 1 }) 
    .then((data) => {
      resp.send(data);
    })
    .catch((err) => {
      console.log(err.message);
      resp.send(err.message);
    });
}
module.exports = {publishsales,retreivesales,allsales}