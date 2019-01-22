const file = require('fs');
const readfile = require('readline-sync');

class StackAcount {
    constructor() {
        this.name = name;
    }
    valueof() {
        console.log("hai");

        var company = getdatafromcompanyjson();
        var share = 0;
        for (let i = 0; i < company.shareholders.length; i++) {
            var share = share + company.shareholders[i].share_per_price;

        }
        console.log("Value of ALL Share is $" + share);

    }
    buy() {
        var id = readfile.question("PLZ ENter your Id ");
       var costomer= getdatafromcostomerjson()
               for(let i=0 )


    }






}
function getdatafromcompanyjson() {

    var com = file.readFileSync('/home/brideit/Documents/SivaSakthi/oops/Jsonfiles/Company.json');
    var company = JSON.parse(com);
    //console.log(company);

    return company;
}
function getdatafromcostomerjson() {
    var cos = file.readFileSync('/home/brideit/Documents/SivaSakthi/oops/Jsonfiles/Customer.json');

    var costomer = JSON.parse(cos);

    return costomer;
}
module.exports = {
    StackAcount
}

