/**
 * Created by Tauqeer Ahmed on 2/16/2016.
 */

var express = require('express');
var app = express();

var evil_Ip = "123.45.67.89";

app.use(function(request,response,next){
    if(request.ip === evil_Ip){
        response.status(401).send("Not allowed");
    }
    else {
        response.end("next middleware called");
        next();
    }
});
app.listen(3000);