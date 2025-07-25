var {getUserModel} = require('../models/formModel')
var Usercolref = getUserModel();


function doSaveUser(req,resp){
    console.log(req.body);
    var userobj = new Usercolref(req.body);
    userobj.save().then((documet)=>{
        resp.json({doc:documet,status:true,msg:"Application Sent Successfully"});
    }).catch((err)=>{
        resp.json({status:false,msg:err.message});
    })
}


function showall(req,resp){
    Usercolref.find().then((data)=>{
        resp.send(data);
    }).catch((err)=>{
        console.log(err.message);
        resp.send(err.message);
    })
}
function updatestatus(req,resp){
    console.log(req.body);
    Usercolref.updateOne({email:req.body.email},{$set:{status:req.body.status}}).then((data)=>{
        if(data.modifiedCount==0)
        {
            resp.send("Invalid Id");
        }
        else{
            resp.json({data:data,status:true,msg:"Status Updated"});
        }
    }).catch((err)=>{
        console.log(err.message);
        resp.send(err.message);
    })
}


module.exports = {doSaveUser,showall,updatestatus}