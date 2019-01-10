const Utility=require('../Utility/Utility');
const readline=require('readline-sync');

var findnumber=()=>{

    var first=readline.question("Enter the first range of your number ");
    var last=readline.question("Enter the last range of Your number ");
    var first=Math.floor(first);
    var last=Math.floor(last);
var b=Utility.Findnumber(first,last);
console.log("Your number is "+b);

}
findnumber();
