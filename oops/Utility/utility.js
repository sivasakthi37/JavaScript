const readline = require('readline-sync');
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








