/**
 * Created by Tauqeer Ahmed on 2/18/2016.
 */

var express = require('express');
var path = require('path');
var apiRouter = require("./routes/api_router");

var app = express();

var staticPath = path.resolve(__dirname , "static");

//middleware
app.use(express.static(staticPath));

app.use("/api",apiRouter);

app.listen(3000, function () {
   console.log('App started at port 3000');
});