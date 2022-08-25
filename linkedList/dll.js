class CreateNode {
    constructor(data) {
        this.data = data;
        this.next = null
        this.previous = null
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null
    }

    insertEnd = (data) => {
        if (!this.head) {
            this.head = new CreateNode(data);
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next
        };
        let temp = new CreateNode(data);
        current.next = temp
        temp.previous = current
        return this.head
    }

    print() {
        let current = this.head;
        while(current.next){
            console.log(current)
            current = current.next
        };
    }

}


let list = new DoublyLinkedList();
console.log(list.insertEnd(10), "10");
console.log(list.insertEnd(20), "20");
console.log(list.insertEnd(30), "30");
console.log(list.head, "head")