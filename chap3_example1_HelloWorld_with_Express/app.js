/**
 * Created by Tauqeer Ahmed on 2/11/2016.
 */
var express = require('express');
var http = require('http');

//To start a new express application we simply call the express function
//Express middleware
var app = express();    //Express return a request handler function in app variable

app.use(function(request,response){
   response.writeHead(200,{"Content-Type" : "text/plain"});
   response.end("Hello World");
});

http.createServer(app).listen(3000);