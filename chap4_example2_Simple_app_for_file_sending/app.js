/**
 * Created by Tauqeer Ahmed on 2/17/2016.
 */
var express = require('express');
var path = require('path');

var app = express();

var filePath = path.join(__dirname , "index1.html");
app.use(function(req,res,next){
   res.sendFile(filePath,function(err){
       if(err){
           next(new Error("Error sending file"));
           //console.log("Failed to send the file");
       }else{
           console.log("File sent");
       }
   });
});
app.listen(3000,function(){
   console.log("App started on port 3000");
});