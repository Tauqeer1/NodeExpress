/**
 * Created by Tauqeer Ahmed on 2/18/2016.
 */

var express = require('express');

var app = express();

//route
app.get("/olivia",function(req,res){
    res.send("Welcome to olivia's homepage");
});
//middleware
app.use(function(req,res){
    res.status(404);
    res.send("Page not found");
});

app.listen(3000,function(){
    console.log("Server started");
});