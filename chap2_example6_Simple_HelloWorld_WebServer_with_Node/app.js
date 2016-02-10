/**
 * Created by Tauqeer Ahmed on 2/11/2016.
 */

//Requiring http module
var http = require('http');
var server = http.createServer(function(request,response){
   /*console.log("In comes a request to :"+request.url);

    response.end("This is the response of your request");*/


    if(request.url === "/"){
        response.end("Welcome to Home page");
    }
    else if(request.url === "/about"){
        response.end("Welcome to about page");
    }
    else{
        response.end("Error ! File not found");
    }


});

server.listen(3000);
console.log("This runs first");