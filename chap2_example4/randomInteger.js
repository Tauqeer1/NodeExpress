/**
 * Created by Tauqeer Ahmed on 2/10/2016.
 */

var max = 100;

function randomInteger(){
    return Math.floor((Math.random()*max));
}

//This line is used to export the randomInteger function so that the other files get this
module.exports = randomInteger;