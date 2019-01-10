const Utility=require('../Utility/Utility');
const readline=require('readline-sync');

var inser=()=>{
        var arr=[];
        var arr=Utility.ArrayInputString(arr);
        
        console.log("before Sorting Your array is "+arr);
       


        var b=Utility.Insertionsort(arr);
        console.log("after sorting "+b);
        
}
inser();