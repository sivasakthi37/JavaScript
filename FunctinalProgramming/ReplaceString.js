const utility=require('../Utility/Utility');

var readline=require('readline-sync');
function replaces (){

var read=readline.question("Enter your name ");
utility.replace(read);
}
replaces();