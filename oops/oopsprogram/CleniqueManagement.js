const readline = require('readline-sync');
const utility = require('../Utility/utility');
const file = require('fs');

function clenique() {

    var check = readline.question("YOU HAVE PAITENT ID IN THIS CLIQUEUE ? IF \nYES PRESS ==>1\n NO PRESS==> 2 ");
    if (check == 2) {
        utility.regester();
        clenique();
    }
    else if (check == 1) {
        var patient = getdatafrompatientsjson();
        var id = readline.question("Enter Your id :");
        console.log(patient.patients[0].id);
        var f=0;
        for (const key in patient.patients) {
            //console.log(patient.patients[key].id + "==" + id);

            if (patient.patients[key].id == id) {
                f=1;
                console.log("ENTER YOUR CHOICE FOR PRESS 1==> DOCTOR DETAILS \n 2==>PAINTENT DETAILS\n 3==>APPOINMENT ");
                var c = readline.question("ENTER YOUR CHOICE :");
        
                switch (c) {
                    case '1':
                        utility.doctordetails();
                        break;
                    case '2':
                        utility.paitentdetails();
                        break;
                    case '3':
                        utility.appointment();
                        break;
        
                }

            }

        }
        if (f==0) {
            console.log("PLZ REGESTER YOUR DETAILS YOU ARE NEW TO THIS CLINIC");
            clenique();
            
        }
         
    }

}
clenique();

function getdatafrompatientsjson() {
    var Paitent = file.readFileSync('/home/brideit/Documents/SivaSakthi/oops/Jsonfiles/Paitents.json');
    var Paitents = JSON.parse(Paitent);
    return Paitents;
}
