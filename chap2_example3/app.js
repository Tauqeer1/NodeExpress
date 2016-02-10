/**
 * Created by Tauqeer Ahmed on 2/10/2016.
 */
var Mustache = require("mustache");

var result = Mustache.render("Hi, {{first}} {{last}}!",{
    first : "Nicholas",
    last : "Cage"
});

console.log(result);