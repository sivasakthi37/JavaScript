const Utility=require('../Utility/Utility');
const readline=require('readline-sync');

function trip(){

    var a=[];
    var arr=Utility.arrayinput(a);
    
    var b=Utility.Triplets(arr);
    if(b==false){
        console.log("no triple");
    }


}
trip();