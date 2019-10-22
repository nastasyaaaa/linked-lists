import {LinkedList} from "./LinkedList.js";
import {ListNode} from "./LinkedList.js";

export class Stack extends LinkedList
{
    top = null;

    push(value){
        let newNode = new ListNode();
        newNode.value = value;
        newNode.next = this.top;
        this.top = newNode;
    }

    pop(){
        if(this.isEmpty()) return null;

        let val = this.top.value;
        this.top = this.top.next;

        return val;
    }

    isEmpty(){
        return this.top === null;
    }

    count() {
        return super.count(this.top);
    }

    printList() {
        super.printList(this.top);
    }
}