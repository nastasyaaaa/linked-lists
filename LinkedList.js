export class ListNode {
    value;
    next;

    constructor(value, next)
    {
        this.value = value;
        this.next = next;
    }
}

export class LinkedList {

    createList(capacity) {
        let first = new ListNode(Math.floor((Math.random() * 100)), null);
        let current = first;

        for(let i = 1; i < capacity; i++) {
            let newNode = new ListNode(Math.floor((Math.random() * 100)), null);

            current.next = newNode;
            current = newNode;
        }

        return first;
    }

    createLoopedList(capacity) {
        let first = new ListNode(Math.floor((Math.random() * 100)), null);
        let current = first;

        if(capacity === 1) {
            first.next = first;
        }

        for(let i = 1; i < capacity; i++) {
            let newNode = new ListNode(Math.floor((Math.random() * 100)), null);

            current.next = newNode;
            current = newNode;

            if(i === capacity - 1) {
                current.next = first;
            }
        }

        return first;
    }

    printList(node) {
        while(node !== null) {
            console.log(node.value);
            node = node.next;
        }
    }

    count(node) {
        let count = 0;
        while(node !== null) {
            count++;
            node = node.next;
        }

        return count;
    }
}
