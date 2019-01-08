const Utility=require('../Utility/Utility');
const readline=require('readline-sync');

function Stopwatch(){

readline.question("press any key to start the stop watch");
var start=Utility.gettime();

readline.question("press any key to stop the stop watch");
var stop=Utility.gettime();


var time=Utility.stopwatch(stop,start);

console.log("your timming is "+Math.floor(time) +" seconds");

}
Stopwatch();