/**
 * Created by Tauqeer Ahmed on 2/18/2016.
 */

var express = require('express');
var path = require('path');

var app = express();

var publicPath = path.resolve(__dirname,"anotherFolder");

app.use("/searching",express.static(publicPath));

app.use(function(req,res){
    res.send("You did not find the static file");
});

app.listen(3000,function(){
    console.log("App started at port 3000");
});