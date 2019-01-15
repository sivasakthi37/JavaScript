/******************************************************************************
 * 
 *  Purpose         : Stack is used to perfoming the operation of push and pop..
 * 
 *  @description    
 * 
 *  @file           : Stack.js
 *  @overview       : Stack is used to push the element in the array and pop is used to pop the element in the array.
 *  @author         : sivasakthi.
 *  @version        : 1.0
 *  @since          : 15-01-2019
 *
 ******************************************************************************/
class Stack {
    constructor() {
        this.stk = [];
        this.size = 0;
        this.capacity;
        this.top = -1;
    }
    /*stack(capacity) {
        this.capacity = capacity;
        var stk = new stk[capacity];
    }*/
    push(ele) {
        if (this.top == this.capacity - 1) {
            console.log("Stack Overflow ");
            return;
        }
        this.size++;
        this.stk[++this.top] = ele;
    }
    pop() {
        if (this.top == -1) {
            console.log("Stack underFlow");
            return;
        }
        this.size--;
        return this.stk[this.top--];
    }
    peek() {
        if (this.top == -1) {
            console.log("No elements Found");
            return;
        }
        console.log(this.stk[this.top]);
    }
    getsize() {
        return this.size;
    }
    isEmpty() {
        if (this.top == -1) {
            console.log("Stack is empty");
            return;
        }
        console.log("Stack is not empty");
    }
    dispaly() {
        var string = "";
        for (let i = 0; i <= this.top; i++) {
            string = string + this.stk[i];
            if (i < this.top) {
                string = string + ",";
            }
        }
        console.log(string);
    }
   
}
module.exports = {
    Stack
}