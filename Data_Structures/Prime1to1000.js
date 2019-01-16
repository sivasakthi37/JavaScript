var Utility = require('../Utility/Utility');
var show = require('util');
/***************************************************************************** 
* 
*  Purpose         : Find all prime number in range 0-1000.
* 
*  @description    
* 
*  @file           : Prime1to1000.js
*  @overview       : primes function to Find all prime number in range 0-1000..
*  @author         : sivasakthi
*  @version        : 1.0
*  @since          : 16-01-2019
*
******************************************************************************/
function primes() {
    var primes = [[], [], [], [], [], [], [], [], [], []];
    var initial = 0;
    var final = 100;
    for (let i = 0; i < 10; i++) {
        primes[i] = Utility.findPrime(initial, final);
        initial = initial + 100;
        final = final + 100;
    }
    var start = 0;
    var end = 100;
    for (let i = 0; i < 10; i++) {
        show.print("["+start + "-" + end + "  ] : " + "[ " + primes[i] + " ]");
        start = start + 100;
        end = end + 100;
        console.log();
    }
}
primes();