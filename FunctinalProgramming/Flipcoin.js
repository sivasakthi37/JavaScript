const Utility=require('../Utility/Utility');
const readline=require('readline-sync');

 function flipcoin(){

    var f=readline.question("HOW MANEY TIMES YOU WANT TO FLIP THE COIN ");

    Utility.flip(f);


}
flipcoin();

