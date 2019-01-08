const Utility=require('../Utility/Utility');
const readline=require('readline-sync');

function Harmo(){

var h=readline.question("Enter the n value ");
Utility.hormonic(h);

}
Harmo();
