const Utility=require('../Utility/Utility');
const readline= require('readline-sync');

var Twod =()=>{

    var arr=[];
    var row=readline.question("Enter the value of row ");
    var col=readline.question("enter the column value ");
 //   var r=readline.question("Enter the value of  ")
var rev=Utility.ReadTwoDarry(arr,row,col);

Utility.PrintTwoDarry(rev,row,col);
}
Twod();
