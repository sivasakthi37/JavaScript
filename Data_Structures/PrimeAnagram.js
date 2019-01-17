const utility = require('../Utility/Utility');
var prime = () => {
    var anaprime = [[], [], [], [], [], [], [], [], [], []];
    var a = 0;
    var b = 100;
    for (let i = 0; i < 10; i++) {

        anaprime[i] = utility.findAnaPrime(a, b);
        a = a + 100;
        b = b + 100;
    }
    var l = 0;
    var k = 100;
    for (let i = 0; i < 10; i++) {

      console.log("[ "+l + " " + k + "] ==> " + anaprime[i])
        l = l + 100;
        k = k + 100;

    }
}
prime();