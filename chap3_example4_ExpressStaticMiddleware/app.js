/**
 * Created by Tauqeer Ahmed on 2/16/2016.
 */
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

var publicPath = path.resolve(__dirname,"public");
//middleware
app.use(express.static(publicPath));

app.use(function(request,response){
    response.writeHead(200,{"Content-Type" : "text/plain"});
    response.end("Looks like you did not find any static file thanks");
});

app.listen(3000);