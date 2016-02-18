/**
 * Created by Tauqeer Ahmed on 2/18/2016.
 */

var express = require('express');

var allowed_ips = ["127.0.0.1","123.456.7.89"];

var api = express.Router();

api.use(function(req,res,next){
    var userIsAllowed = allowed_ips.indexOf(req.ip) !== -1;
    if(!userIsAllowed){
        res.status(404);
        res.send("Not authorized");
    }
    else {
        next();
    }
});

api.get("/users",function(req,res){});
api.post("/user",function(req,res){});
api.get("/messages",function(req,res){});
api.post("/message",function(req,res){});

module.exports = api;