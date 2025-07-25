var mongooes = require('mongoose')

function getUserModel()
{
    var userscheema = mongooes.Schema;
    
    var userCollectionSchema = {
        email:{type:String, required:true, unique:true, index:true},
        fname: String,
        lname:String,
        phone:String,
        address:String,
        businessname:String,
        sitelocation:String,
        city:String,
        code:String,
        area:String,
        floor:String,
        ownership:String,
        doa:{ type: Date, default: Date.now },
        status:{type: Number, default: -1},
    }
    var version={
        versionkey:false
    }
    var UsercolScheema = new userscheema(userCollectionSchema,version);
    
    var Usercolref = mongooes.model("FormData",UsercolScheema);
    return Usercolref;
}

module.exports = {getUserModel}