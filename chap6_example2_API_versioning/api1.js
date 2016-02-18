/**
 * Created by Tauqeer Ahmed on 2/18/2016.
 */

//requiring an express module
var express = require('express');

//Creating a router
var api = express.Router();

//Defining a routes
api.get("/timezone",function(req,res){
    res.send("Sample response for /timezone");
});

api.get("/all_timezones",function(req,res){
    res.send("Sample response for /all_timezones");
});
//export the api Router so that can use it
module.exports = api;