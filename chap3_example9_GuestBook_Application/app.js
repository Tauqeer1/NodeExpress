/**
 * Created by Tauqeer Ahmed on 2/16/2016.
 */

var path = require('path');
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

//making an express app
var app = express();

//views are in folder views
app.set("views",path.resolve(__dirname, "views"));
//views will use ejs engine to render
app.set("view engine","ejs");

var entries = [];
app.locals.entries = entries;

//middlewares
//Morgan to log every request
app.use(logger("dev"));

app.use(bodyParser.urlencoded({extended : false}));

//routing
app.get("/",function(request,response){
    response.render("index");
});

app.get("/new-entry",function(request,response){
    response.render("new-entry");
});

app.post("/new-entry",function(request,response){
    console.log("Body title " +request.body.title);
    console.log("Content " +request.body.content);

   if(!request.body.title || !request.body.content){
       response.status(400).send("Entries must have a title and content");
       return;
   }else {
       entries.push(
           {
               title: request.body.title,
               content: request.body.content,
               published: new Date()
           }
       );
       response.redirect("/");
   }
});
//middleware
app.use(function(request,response){
    response.status(404).render("404");
});

app.listen(3000,function(){
    console.log("Guestbook app started on port 3000");
});
