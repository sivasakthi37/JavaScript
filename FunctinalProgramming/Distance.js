const Utility=require('/home/brideit/Documents/SivaSakthi/Utility/Utility');
const readline=require('readline-sync');


function Distance(){

    var x=readline.question("Enter the X value ");
    var Y=readline.question("Enter the Y value ");

Utility.Distances(x,Y);


}
Distance();
