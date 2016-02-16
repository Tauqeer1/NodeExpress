/**
 * Created by Tauqeer Ahmed on 2/16/2016.
 */

var express = require('express');
var path = require('path');

var app = express();

var publicPath = path.resolve(__dirname, "public");

//middleware
app.use(express.static(publicPath));

//Routes
app.get("/",function(request,response){
   response.end("Welcome to my homepage!");
});
app.get("/about",function(request,response){
    response.end("Welcome to the about page");
});
app.get("/weather",function(request,response){
    response.end("The current weather is nice");
});
//middleware
app.use(function(request,response){
   response.statusCode = 404;
    response.end("404!");
});

app.listen(3000);