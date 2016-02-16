/**
 * Created by Tauqeer Ahmed on 2/16/2016.
 */
var express = require('express');


var app = express();


app.get("/hello/:who",function(request,response){
   response.end("Hello, " + request.params.who  + ".");
});

app.listen(3000);