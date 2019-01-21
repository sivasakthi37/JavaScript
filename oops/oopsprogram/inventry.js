/***************************************************************************** 
* 
*  Purpose         : JSON Inventory Data Management of Rice, Pulses and Wheats..
* 
*  @description    
* 
*  @file           : inventry.js
*  @overview       : TO Manage data in the JSON FILE.
*  @author         : sivasakthi
*  @version        : 1.0
*  @since          : 21-01-2019
*
******************************************************************************/
const fsy = require('fs');
const readline = require('readline-sync');

class inventry {
    constructor(name, pname, weight, kgprice) {
        this.name = name;
        this.productName = pname;
        this.weight = weight;
        this.totalprice = kgprice;
    }
}
var data = [];
var pricekg = [80, 100, 150];
console.log("------------WELCOME TO SHOP-------------------");
console.log();
try {
    var name = readline.question("Enter your name ");
    if (!isNaN(name)) throw "PLZ ENTER VALID NAME"
    console.log();
    var n = new inventry(name);

    function costomer() {
        //console.log("Hai " + name);

        console.log("1..purchase.. 2..Exit..");
        console.log();
        try {
            var choice = readline.question("Enter your choice ");
            console.log(choice);

            if (isNaN(choice)) throw "PLZ ENTER NUMBER";
            if (choice < '1' || choice > '2') throw " ENter WithinRange of 1 to 2 ";
        }
        catch (err) {
            console.log(err);
            console.log();
            costomer();

        }
        switch (choice) {

            case '1': purchace1();
                break;
            case '2': Exit();
                break;

        }
    } costomer();

    function purchace1() {


        console.log("What do you Want..");
        arr = ["rise", "wheats", "pulses"];
        console.log("1..rise.. 2..wheats.. 3.Pulses.. ");

        console.log();
        var pname = readline.question("ENter your choice ");
        try {
            if (pname < '1' || pname > '3') throw " ENter WithinRange of 1 to 3 ";

            var kg = readline.question("How many kg u want ");
            console.log();
            if (isNaN(kg)) throw "PLZ ENTER NUMBER";
            console.log(arr[pname - 1] + " per kg is " + pricekg[pname - 1]);

            console.log(arr[pname - 1] + " for " + kg + " kg is " + pricekg[pname - 1] * kg);
            var price = (pricekg[pname - 1] * kg);
            var price1 = price;
            var cls = new inventry(n, arr[pname - 1], Number(kg), price1);
            data.push(cls);
            if (data.length == 2) {
                //console.log(data[0].totalprice + data[1].totalprice);
                var totalprice = data[0].totalprice + data[1].totalprice;
                var cls = new inventry(n, data[0].productName + " + " + arr[pname - 1], data[0].weight + " + " + Number(kg), totalprice);
                var jst = JSON.stringify(cls);

                fsy.writeFileSync('../Jsonfiles/inventry.json', jst);

            }
            else if (data.length == 3) {
                var totalprice = data[0].totalprice + data[1].totalprice + data[2].totalprice;
                var cls = new inventry(n, data[0].productName + " + " + data[1].productName + " + " + arr[pname - 1], data[0].weight + " + " + data[1].weight + " + " + Number(kg), totalprice);
                var jst = JSON.stringify(cls);

                fsy.writeFileSync('../Jsonfiles/inventry.json', jst);
            }
            else {
                var jst = JSON.stringify(cls);

                fsy.writeFileSync('../Jsonfiles/inventry.json', jst);
            }
        }
        catch (err) {
            console.log("ERROR "+err);
            purchace1();

        }
        ask();
    }
    function viewcart() {
       // /home/brideit/Documents/SivaSakthi/oops/Jsonfiles/inventry.json
        var data = fsy.readFileSync('../Jsonfiles/inventry.json');
        var data1 = JSON.parse(data);

        console.log(data1);
        ask();

    }
    /*function purchace2() {
     
        console.log("What do you Want..");
        arr = ["rise", "wheats", "pulses"];
        console.log("1..rise.. 2..wheats.. 3.Pulses.. ");
        var pname = readline.question("ENter your choice ");
     
        var kg = readline.question("How many kg u want ");
        console.log(arr[pname - 1] + " per kg is " + pricekg[pname - 1]);
     
        console.log(arr[pname - 1] + " for " + kg + " kg is " + pricekg[pname - 1] * kg);
        var price = (pricekg[pname - 1] * kg);
        var price1 = price + " rupee";
     
        var cls = new inventry(n, arr[pname - 1], kg + " kg", price1);
        // data.push(cls);
        var jst = JSON.stringify(cls);
     
        fsy.writeFileSync('../oops/Jsonfiles/inventry.json', jst);
     
        ask();
     
    }*/
    function ask() {

        console.log("DO YOU want to continue are u buy again anything? ");

        console.log("press 1..To purchace again.. 2..To go viewcart..3..To bill ");
        console.log();
        var as = readline.question("ENter your choice ");
        switch (as) {
            case '1':
                purchace1();
                break;
            case '2':
                viewcart();

                break;
            case '3':
                bill();
                break;
        }
    }
    function bill() {

        var data = fsy.readFileSync('../Jsonfiles/inventry.json');
        var data1 = JSON.parse(data);


        console.log(data1);
    
    }
    function Exit() {
        console.log("---------------------------Process is End--------------------------------");

        process.exit();
    }
}
catch (err) {
    console.log(err);


}

/*var cls=new inventry("siva",2,100);
var data=fsy.readFileSync('../oops/Jsonfiles/inventry.json');
var data1=JSON.parse(data);
console.log(data1);


var convert=JSON.stringify(cls);
fsy.writeFileSync('../oops/Jsonfiles/inventry.json',convert);*/



/*var a=[];
var data=fs.readFileSync('../oops/Jsonfiles/inventry.json');
var data1=JSON.parse(data);

d={
    "name":"Sivasakthi",
    "grade":"A",
    "result":"pass"
}
d1={
    "name":"Sivasakthi",
    "grade":"b",
    "result":"pass"
}
d2={
    "name":"Sivasakthi",
    "grade":"b",
    "result":"pass"
}
a.push(d);
a.push(d1);
a.push(d2);
console.log(a);
var jst=JSON.stringify(a);

fs.writeFileSync('../oops/Jsonfiles/inventry.json',jst);

console.log((data1));
var data=fs.readFileSync('../oops/Jsonfiles/inventry.json');
var data1=JSON.parse(data);

console.log(data1);*/

