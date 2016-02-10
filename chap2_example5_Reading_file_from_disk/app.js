/**
 * Created by Tauqeer Ahmed on 2/11/2016.
 */

//Requiring file module
var fs = require('fs');

var options = {encoding : "utf-8"};

//Read the file myFile.txt and interpret the bytes as UTF-8 format
fs.readFile("myFile.txt",options,function(error,data){
    if(error){
        console.log("Error reading a file");
        return;
    }

    console.log(data.match(/x/gi).length + " = letter X's");

});
console.log("Hello World"); //First this will print


