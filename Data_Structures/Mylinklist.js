
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
    search(element, list) {
        var temp = list.head;
        console.log("remove");
        while (temp != null) {
            console.log(element+"== "+ temp.data);
          console.log(element==temp.data.trim());
          
            // console.log('element: '+ typeof(element)+' ' + temp.data);
            // console.log('tempdata '+typeof(temp.data)+' ' +element);
            if (element == temp.data.trim()) {
                console.log("remove3");
                return true;
            }
            else{
                console.log('testing');
            }
            
            temp = temp.next;
        }
        return false;
    }
    remove(element) {

        var temp = this.head;
        var prev = this.head;
        if (temp.data === element) {
            this.head = temp.next;
            return true;
        }

        while (temp.data != element) {
            prev = temp;
            temp = temp.next;
        }

        prev.next = temp.next;
        return;
    }
}
module.exports = {
    mylinklist
}