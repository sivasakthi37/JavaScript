const Utility = require('../Utility/Utility');
const readline = require('readline-sync');


function search() {
    console.log("Enter 1 for BINARY SEARCH");
    console.log("Enter 2 for BinarySearch Method For String");
    
    var n=readline.question("Enter Your choice ");
    var n1=Math.floor(n);
    switch (n1) {       
        case 1:{
            var arr = [];
            var arr=Utility.arrayinput(arr);
            console.log("Your array is "+arr);
            var s=readline.question("Enter your Search Element ");
            var b = Utility.Binarysearch(arr, s);

            if(b==-1){
                console.log("Your number is not Present ");
              }
             else{
             console.log("Your number is in " + b + " index");
             }      
                   break;
            }
            case 2:{
                  var arr=[];
                  var arr=Utility.ArrayInputString(arr);
                  console.log("Your Array is "+arr);
                  var s=readline.question("Enter your Search Array ");
                  var b=Utility.Binarysearchstr(arr,s);
                   if(b==-1){
                     console.log("Your String is not Present ");
                   }
                  else{
                  console.log("Your String is in " + b + " index");
                  }
                  break;

                   }
            case 3:{
                    var arr=[];
                    var arr=Utility.arrayinput(arr);
                    console.log("your Array is "+arr);
                    
                    var b=Utility.Insertionsort(arr);
                    console.log("After sorting  ");
                    console.log(b);
                    
                   }


                   }


}
search();