
class node {

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class mylinklist {


    add(data) {
        
        var n = new node(data);

        if (this.head == null) {
            this.head = n;
            return;
        }

        var t = this.head;
        while (t.next != null) {

            t = t.next;
        }
        t.next = n;
        
        return;

    }
    display() {
        var t = this.head;
        var show = ""
        while (t != null) {
            show = show + t.data;
           
            t = t.next;
        }
        console.log(show);
    }
}
module.exports = {
    mylinklist
}