const rj = require('../Utility/utility');
const readline = require('readline-sync');
var Regex = () => {
    try {


        var name = readline.question("ENter your name ");
        if(!isNaN(name)) throw "PLZ ENTER STRING VALUE";
        var fullname = readline.question("ENTER your full name ");
        console.log();
        
        if(!isNaN(fullname)) throw "PLZ ENTER STRING VALUE";
        var mob = readline.question("Enter your MObile number ");
        if(isNaN(mob)) throw "PLZ ENTER valid PHnumber VALUE";
        if(mob.length<10 || 10<mob.length) throw "PLZ ENTER VALID PHONE NUMBER";
        console.log();
console.log("------------------------------------------------------");

        rj.regex(name, fullname, mob)

    } catch (error) {
        console.log(error);
        Regex();

    }
}
Regex();