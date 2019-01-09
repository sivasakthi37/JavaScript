const Utility=require('../Utility/Utility');
const readline=require('readline-sync');

var anagram=()=>{
var st1=readline.question("Enter the first String ");
var st2=readline.question("Enter the second String ");
Utility.Anagram(st1,st2);
}
anagram();