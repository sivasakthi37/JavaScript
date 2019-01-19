
const fsy = require('fs');
const readline = require('readline-sync');

class inventry {
    constructor(name, pname, weight, kgprice) {
        this.name = name;
        this.productName = pname;
        this.weight = weight;
        this.kgprice = kgprice;
    }
}
var data = [];
var pricekg = [80, 100, 150];
var costomer = () => {
    console.log("------------WELCOME TO SHOP-------------------");

    console.log("What you need today..?");
    console.log("1..purchase 2.bill. 3..Exit");
    var choice = readline.question("Enter your choice ");
    if(choice<1 && choice>3) throw "ENter WithinRange ";

    switch (choice) {

        case '1': purchace1();
            break;
        case '2': bill();
            break;
        case '3': Exit();
    }
}
costomer();
function purchace1() {

    var name = readline.question("Enter your name ");
    console.log("Hai " + name);
    console.log("What do you Want..");
    arr = ["rise", "wheats", "pulses"];
    console.log("1..rise.. 2..wheats.. 3.Pulses.. ");
    var pname = readline.question("ENter your choice ");

    var kg = readline.question("How many kg u want ");
    console.log(arr[pname - 1] + " per kg is " + pricekg[pname - 1]);

    console.log(arr[pname - 1] + " for " + kg + " kg is " + pricekg[pname - 1] * kg);
    var price = (pricekg[pname - 1] * kg);
    var price1 = price + " rupee";
    var cls = new inventry(name, arr[pname - 1], kg + " kg", price1);
    data.push(cls);
    var jst = JSON.stringify(data);

    fsy.writeFileSync('../oops/Jsonfiles/inventry.json', jst);

    ask();
}

function ask() {

    console.log("DO YOU want to continue are u buy again anything? ");
    console.log("if YES press ==> 1..if NO press==>2 ");

    var as = readline.question("ENter your choice ");
    switch (as) {
        case '1':
            purchace1();
            break;
        case '2':
            console.log("PLZ ENTER 2 to get YOUr bills");
            costomer();


        default:
            break;
    }
}
function bill() {

    var data = fsy.readFileSync('../oops/Jsonfiles/inventry.json');
    var data1 = JSON.parse(data);


    console.log(data1);

}
function Exit(){
console.log("---------------------------Process is End--------------------------------");

process.exit();
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

