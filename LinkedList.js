export class ListNode {
    value;
    next;
}

export class LinkedList {

    createList(capacity) {
        let first = new ListNode();
        first.value = Math.floor((Math.random() * 100) / 100);
        let current = first;

        for(let i = 1; i < capacity; i++) {
            let newNode = new ListNode();
            newNode.next = null;
            newNode.value = Math.floor((Math.random() * 100));

            current.next = newNode;
            current = newNode;
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
