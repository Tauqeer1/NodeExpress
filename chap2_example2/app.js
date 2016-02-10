/**
 * Created by Tauqeer Ahmed on 2/9/2016.
 */
//Getting url built in module
var url = require("url");

var parsedUrl = url.parse("http://www.example.com/[CA]profile?name=barry");

console.log(parsedUrl.protocol);    //"http:"
console.log(parsedUrl.host);        //"www.example.com"
console.log(parsedUrl.query);       //"name=barry"