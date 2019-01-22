const file = require('fs');
const readline = require('readline-sync');
class stock1 {
    constructor(sname, share, sharePrice, totalPrice) {
        this.Stockname = sname;
        this.share = share;
        this.sharePrice = sharePrice;
        this.totalPrice = totalPrice;
    }
}
var data = [];
try {
    function user() {

        var stock = readline.question("How many stock you have.. ");
        if (isNaN(stock)) throw "PLZ ENTER VALID NUMBER"

        Store(stock);

    }
    user();
    function Store(stock) {

        i = 0;
        
            while (i < stock) {

                var sname = readline.question("Enter the Stock Names.. ");
                if (!isNaN(sname)) throw "PLZ ENTER VALID name"
                var share = readline.question("Enter Number of Share ");
                if (isNaN(share)) throw "PLZ ENTER VALID Value"
                var sharePrice = readline.question("Enter the Share Price. ");
                if (isNaN(sharePrice)) throw "PLZ ENTER VALID Price"
                var totalsharePrice = share * sharePrice;

                var st = new stock1(sname, share, sharePrice, totalsharePrice);

                data.push(st);
                write(st);

                i++;
            }
        
    }
    write(data);
    //console.log(data);
    function write(st) {
        var data1 = JSON.stringify(st);
        file.writeFileSync('../Jsonfiles/Stock.json', data1);

    }
    function readfile() {
        var data2 = file.readFileSync('../Jsonfiles/Stock.json');
        var convertdata = JSON.parse(data2);
        console.log(convertdata);
    }
}

catch (err) {
    console.log("ERROR : " + err);

}



