/**
 * Created by Tauqeer Ahmed on 2/11/2016.
 */
var express = require('express');
var http = require('http');

var app = express();

//Logging middleware
app.use(function(request,response,next){
   console.log("In comes a " + request.method + " to " + request.url);
   next();
});

//authorization middleware
app.use(function(request,response,next){
    var minute = (new Date()).getMinutes();
    if(minute % 2 === 0){
        next();
    }
    else{
        response.statusCode = 403;
        response.end("Not authorized");
    }
});

//Response middleware on even minutes
app.use(function(request,response){
   response.end('Secret info: the password is "thisPassword"!');
});

http.createServer(app).listen(3000);