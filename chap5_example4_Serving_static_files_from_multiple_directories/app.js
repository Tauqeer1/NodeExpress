/**
 * Created by Tauqeer Ahmed on 2/18/2016.
 */
var express = require('express');
var path = require('path');

var app = express();

var publicPath = path.resolve(__dirname,"public");
var userUpload = path.resolve(__dirname,"anotherFolder");

app.use("/public",express.static(publicPath));
app.use("/another",express.static(userUpload));

app.listen(3000,function(){
    console.log("App started at port 3000");
});