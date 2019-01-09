const  Utility=require('../Utility/Utility');
const readline=require('readline-sync');


function quter(){
var a=readline.question("Enter the A value ");
var b=readline.question("Enter the B value ");
var c=readline.question("Enter the C value ");
    
Utility.quadratic(a,b,c);
}
quter();