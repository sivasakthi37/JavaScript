const Utility=require('../Utility/Utility');
const readline=require('readline-sync');

function gambler(){

   var r=readline.question("Enter the goal value  ");
Utility.gambler(r);

}
gambler();