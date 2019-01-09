const Utility=require('../Utility/Utility');
const readline=require('readline-sync');

var  Windchill =()=>{

   /* the formula is not valid if t is larger than 50 in absolute value or if v is larger 
    than 120 or less than 3 (you may assume that the values you get are in that range).*/


    var t=readline.question("Enter the temperature in Fahrenheit ");
    var v=readline.question("Enter the Speed in miles per hour");

    var W=35.74+(0.6215*t)+((0.4275*t)-35.75)*(Math.pow(v, 0.16));

Utility.windchill(t,v);

}

Windchill();

