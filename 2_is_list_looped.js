import {LinkedList} from "./LinkedList.js";

function isListLooped(head)
{
    let node = head;
    let nodes = new Set();

    while(node !== null) {

        if(nodes.has(node)) {
            return true;
        }

        nodes.add(node);

        node = node.next;
    }

    return false;
}

let list = new LinkedList();
let headOfLoopedList = list.createLoopedList(4);

console.log(isListLooped(headOfLoopedList));
