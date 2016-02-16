/**
 * Created by Tauqeer Ahmed on 2/12/2016.
 */
var express = require('express');
var logger = require('morgan');
var http = require('http');

var app = express();

app.use(logger("short"));

app.use(function(request,response){
   response.writeHead(200,{"Content-Type" : "text/plain"});
   response.end("Hello Pakistan!");

});

http.createServer(app).listen(3000);