const Utility=require('../Utility/Utility');
const readline=require('readline-sync');


function prime(){
var n=readline.question("Enter the number ");
Utility.PrimeFactor(n);


}
prime();