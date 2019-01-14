/**
 * @description class Stack
 * 
 * @class Stack
 * @purpose Creates Stack contains various manipulation functions
 */
class Stack {
    /**
     * @description a Constructor
     * intializes an array arr , top and size variable
     */
    constructor() {

        this.arr = [];
        this.top = -1;
        this.size = 0;
    }
     /**
     * @description add element to the stack
     * @param {*} element 
     */
    push(element) {
        //this.top = this.top + 1;
        this.arr[++this.top] = element;
        this.size++;
        return;
    }
    /**
     * @description remove element from the top of the stack
     * @returns {*} element at the top
     */
    pop() {
        if (this.top == -1) {
            console.log("Stack underflowed");
            return null;
        } 
            this.size--;
            console.log("poped item: ",this.arr[this.top--])
            return this.arr[this.top--];
        
    }
    /**
     * @description checks if stack is empty
     */
    isEmpty() {
        if (this.top == -1) {
            return true;
        }
        return false;
    }
    /**
     * @description finds the size of the stack
     * @returns {Number} returns size of the stack
     */
    size() {
        return this.size;
    }
   
    
    /**
     * @description find the element at the top
     * @returns {*} element at the top 
     */
    peek() {
        if (this.top == -1) {
            console.log("Stack Underflowed ");
            return;
        }
        return this.arr[this.top];
    }
    /**
     * @description Display the stack
     */
    display() {
        if (this.top > -1) {
            var str = "";
            for (let i = 0; i < this.top + 1; i++) {
                str = str + this.arr[i] + " ";
            }
            console.log(str);
        }
    }
}
module.exports = {
    Stack
}