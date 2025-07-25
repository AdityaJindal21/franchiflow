var express=require("express");
var mongooes = require("mongoose");
var cors = require("cors");

var app=express();

app.listen(2004,function(){
    console.log("Server Started...");
})

app.use(express.urlencoded({extended:true}))
app.use(cors());

var {url} = require("./config/config");
var urll = url;

mongooes.connect(urll).then(()=>{
    console.log("Connected");
}).catch((err)=>{
    console.log(err.message);
})

var formRouter = require('./router/formRouter');
var applicantRouter = require('./router/applicantRouter');
var salesRouter = require('./router/salesRouter');

app.use('/form',formRouter)
app.use('/applicants',applicantRouter)
app.use('/sales',salesRouter)

