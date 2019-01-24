/**
 * @description:This utility file is used to store all bussiness login regating oops program...
 */
const readline = require('readline-sync');
const file = require('fs');
class Reg {
    /**
     * 
     * @param {id} id 
     * @param {name} name 
     * @param {symbol} symbol 
     * @param {phnumber} phnumber 
     */
    constructor(name, id, symbol, phnumber) {
        this.name = name;
        this.id = id;
        this.symbol = symbol;
        this.phnumber = phnumber;
    }


}
var regs = [];
module.exports = {

    regex(name, fullname, mob) {
        var st1 = "Hello <<name>>,\nWe have your full name as <<full name>> in our system.\nyour contact number is 91-xxxxxxxxxx. \nPlease,let us know in case of any clarification \nThank you BridgeLabz 01/01/2016. ";


        var st1 = st1.replace('<<name>>', name);

        st1 = st1.replace('<<full name>>', fullname);

        st1 = st1.replace('xxxxxxxxxx', mob);

        var data = new Date().toLocaleDateString();
        st1 = st1.replace('01/01/2016', data);

        console.log(st1);
    },

    regester() {
        try {
            var name = readline.question("Enter your name ");
            if (!isNaN(name)) throw "PLZ ENTER STRING";
            var id = readline.question("Enter your ID ");
            if (isNaN(id)) throw "PLZ ENTER NUMBER";

            var age = readline.question("Enter your Age ");
            if (isNaN(age)) throw "PLZ ENTER number";
            var phnumber = readline.question("Enter your phnumber ");
            if (phnumber.length > 10 || phnumber.length < 10) throw "PLZ ENTER VALID PH NUMBER"
            //  if (mob.length < 10 || 10 < mob.length) throw "PLZ ENTER VALID PHONE NUMBER";
            if (isNaN(phnumber)) throw "PLZ ENTER NUMBER";

            var reg = new Reg(name, id, age, phnumber);
            // console.log(reg);

            regs.push(reg);
            var paitent = this.getdatafrompatientsjson();
            console.log(regs);

            paitent.patients.push(reg);

            file.writeFileSync('/home/brideit/Documents/SivaSakthi/oops/Jsonfiles/Paitents.json', JSON.stringify(paitent));
            console.log("SUCESSFULLY REGESTERED");


        }
        catch (err) {
            console.log("ERROR :" + err);
            this.regester();

        }


    },
    getdatafrompatientsjson() {
        var Paitent = file.readFileSync('/home/brideit/Documents/SivaSakthi/oops/Jsonfiles/Paitents.json');
        var Paitents = JSON.parse(Paitent);
        return Paitents;
    },
    getdatafromdoctorjson() {
        var doctor = file.readFileSync('/home/brideit/Documents/SivaSakthi/oops/Jsonfiles/Doctor.json');
        var doctors = JSON.parse(doctor);
        return doctors;
    },
    doctordetails() {

        var doctors = this.getdatafromdoctorjson();
        console.log(doctors);


    },
    paitentdetails() {

        var patients=this.getdatafrompatientsjson();
        console.log(patients);
        



    },
    appointment() {

    }












}
/* Commercial(costomer,company) {
     var q = readline.question("Are You new Costomer ? if YES PRESS 1.. IF NO Press 2..");
     if (q == 1) {
         var ph = readline.question("ENter the id number ");


         for (let i = 0; i < costomer.user.length; i++) {
            /* console.log(ph + "==>" + costomer.user[i].phnumber);
             console.log(ph == costomer.user[i].phnumber);

if (ph == costomer.user[i].id) {
    this.purchase(costomer, company);
}
            }

        }
    },
purchase(costomer, company) {
    console.log("----Company Shareholders----");

    for (const key in company.shareholders) {
        console.log(company.shareholders[key]);

    }


}*/








