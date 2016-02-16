/**
 * Created by Tauqeer Ahmed on 2/11/2016.
 */
var express = require('express');
var http = require('http');
var app = express();    //Run the express app

//This is the logging middleware
app.use(function(request,response,next){
   console.log("In comes a "+request.method + " to " + request.url);
   next();
});

app.use(function(request,response){
   response.writeHead(200,{"Content-Type" : "text/plain"});
   response.end("Hello Pakistan");
});

http.createServer(app).listen(3000);