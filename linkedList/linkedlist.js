class CreateNode {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class CreateLinkedList {
    constructor() {
        this.head = null
    }

    create(data) {
        if (!this.head) {
            this.head = new CreateNode(data);
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next
        }
        current.next = new CreateNode(data);
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }

    reverse() {
        // console.l
        let previous = null;
        let current = this.head;
        while(current) {
            const next = current.next;
            current.next = previous;
            previous = current;
            current = next
        }
        
    }
}

let list = new CreateLinkedList();
list.create(10);
list.create(20);
list.create(30);
list.print();
list.reverse();
// list.print()