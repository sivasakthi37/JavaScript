/******************************************************************************
 * 
 *  Purpose         : Queue is used to perfoming the operation of enque and deque..
 * 
 *  @description    
 * 
 *  @file           : Queue.js
 *  @overview       : Queue is used to enque the element in the array and dequeue is used to pop the element in the array.
 *  @author         : sivasakthi
 *  @version        : 1.0
 *  @since          : 15-01-2019
 *
 ******************************************************************************/
class myQueue {

    constructor() {
        this.arr = [];
        this.capacity = 0;
        this.rear = this.front = -1;

    }
    enque(data) {
        if (this.front == this.capacity) {
            console.log("Queue overflow ");
            return;
        }
        if (this.front == -1) {
            this.front++
        }
        this.arr[++this.rear] = data;
        this.capacity++;
    }

    dequeue() {
        if (this.front == -1) {
            console.log("Queue Underflowed");
            return;
        }
        if (this.front > this.rear) {
            this.front = this.rear = -1;
        }
        var temp = this.arr[this.front++];

        return temp;
        // return this.arr.shift();
    }

    display() {
        if (this.front != this.rear) {
            var str = "[ ";
            for (let index = this.front; index <= this.rear; index++) {
                str = str + this.arr[index] + " ";
            }
            console.log("Elements in queue is ");
            console.log(str + "]");
        } else {
            console.log("Queue is empty ");
        }
    }
    isempty() {
        if (this.rear == this.front == -1) {
            return true;
        }
        else {
            return false;
        }

    }
    size(){
        return this.rear;
    }
}
module.exports = {
    myQueue
}