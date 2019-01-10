const utility=require('../Utility/Utility');
const readline=require('readline-sync');

var merge=function(){
    var arr=[];
var arr=utility.arrayinput(arr);
    
var arr3=utility.Mergesort(arr,0,arr.length-1);
console.log((arr3));

}
merge();