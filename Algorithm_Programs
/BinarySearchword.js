const Utility = require('../Utility/Utility');
const readline = require('readline-sync');

var Binary = () => {

    var arr = [];
    var arr = Utility.ArrayInputString(arr);
    console.log("Your array is " + arr);
    var ele = readline.question("Enter the searching word ");
    var arr1 = Utility.Binarysearchstr(arr, ele);


    if (arr1 == -1) {
        console.log("Your word is not there ");

    }
    else {
        console.log("Your word in " + arr1 + " index");
    }


}
Binary();