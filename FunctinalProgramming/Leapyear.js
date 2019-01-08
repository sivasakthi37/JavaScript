const Utility=require('../Utility/Utility');
const readline=require('readline-sync');
function leap(){
 var y=readline.question("Enter your year to find leap year or not ")
Utility.leapyear(y);
}
leap();