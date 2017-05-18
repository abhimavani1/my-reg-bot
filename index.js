var express = require('express');
var app=express();
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send("Hello Sagar...!");
});

app.post("/echo",function(req,res){
    console.log(req.body.echoReturn);
    
    res.send(req.body.catchContent);
});

app.post("/getFirstName",function(req,res){
    console.log(req.body.firstName);
    
    res.send("allright,i get your firstname is "+req.body.firstName+". Now please tell me your last name?");
});

var server=app.listen(process.env.PORT || 3000,function(){
    console.log("port listern at:"+server.address().port);
});