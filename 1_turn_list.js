import {LinkedList} from "./LinkedList.js";

function turnList(head, k, listCount) {

    let turnsNumber = k % listCount;
    if(turnsNumber === 0) {
        return head;
    }

    let counter = listCount;
    let node = head;
    let newHead = null;

    while (node !== null) {
        if (counter === turnsNumber) {
            newHead = node;
            break;
        }
        counter--;
        node = node.next;
    }

    // зациклим
    while (true) {
        if (node.next === null) {
            node.next = head;
            break;
        }
        node = node.next;
    }

    node = head;
    while (true) {
        if (node.next === newHead) {
            node.next = null;
            break;
        }
        node = node.next;
    }

    return newHead;
}

let list = new LinkedList();
let head = list.createList(4);

console.log('before list: ');
list.printList(head);

let newHead = turnList(head, 12, list.count(head));

console.log('after list: ');
list.printList(newHead);