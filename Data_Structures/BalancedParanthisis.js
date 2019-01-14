/******************************************************************************
 *  Execution       :   1. default node         cmd> node BalancedPranthisis.js 
 *                      2. if nodemon installed cmd> nodemon BalancedPranthisis.js
 * 
 *  Purpose         : To find the paranthisis is balanced or not
 * 
 *  @description    
 * 
 *  @file           : BalancedPranthisis.js
 *  @overview       : This program is used to find the paranthisis is balanced or not.
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 13-01-2019
 *
 ******************************************************************************/
const utility = require('../Utility/Utility');
const readline = require('readline-sync');
const stack1 = require('../Data_Structures/Stack');

var stackk = new stack1.Stack;


function paranthisis() {
    /**
     * Create a Stack Object to perform various stack operations
     */
    var stackk = new stack1.Stack;

    console.log("Enter an expression to validate Parenthesis balance: ");
    /**
     * Exception handling to validate user Input
     */
    try {
        /**
         * expression variable to store user input string
         */
        var expression=readline.question("enter your paranthisis");
        console.log(expression);
        if (expression == "") throw "Expression required , Empty string found"
        /**
         * Function call , parenthesisMatch(expression) to validate balancing of expression and storing
         * result in variable , result
         */
        let result = parenthesisMatch(expression);

        if (result) {
            console.log("Parenthesis is balanced");
        } else {
            console.log("Parenthesis is  balanced");
        }

    } catch (err) {
        console.log("Error: " + err);
    }
}
/**
 * Local Function call to execute the program
 */
paranthisis();

/**
 * @description Check if expression is balanced or not
 * @param {} expression
 * @return {boolean} Return true/false if expression is balanced 
 */
function parenthesisMatch(expression) {
   /**
    * Initialize empty array ch[] to store each character as input
    */
   console.log("inside: ",expression)
    var ch = [], store;
    for (let i = 0; i < expression.length; i++) {
        ch[i] = expression.charAt(i);

    /**
     * Condtional to validate expression balance , using push() and pop(x) operations
     */
        if (ch[i] == '{' || ch[i] == '[' || ch[i] == '(') {
            console.log(ch[i]);

            stackk.push(ch[i]);
        } else {
            /**
             *Switch Case to validate expression balance , using push() and pop(x) operations 
             */
            console.log("outside: ",ch[i])
            switch (ch[i]) {
                case "}": 
                
                    if ( stackk.pop() != '{') {
                        return false;
                    }
                    break;
                case ']': store = stackk.pop();
                    if (store != '[') {
                        return false;
                    }
                    break;
                case ')': store = stackk.pop();
                console.log("Store value ==> "+store);
            console.log("stackk.pop ==>"+stackk.pop());
           
                    if (store != '(') {
                        return false;
                    }
                    break;

            }
        }
    }
    /**
     * Returns true if stack is empty else return false
     */
    console.log(stackk.size);
    if (stackk.size == 0)
        return true;
    return false;
}





