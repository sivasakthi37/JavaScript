const Utility=require('../Utility/Utility');
const readline=require('readline-sync');

function Permutation(){

var words=readline.question("Enter the words ");
var w=words.length-1;
Utility.Permutation(words,0,w);


}
Permutation();
