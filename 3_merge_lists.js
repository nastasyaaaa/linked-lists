import {LinkedList} from "./LinkedList.js";
import {ListNode} from "./LinkedList.js";

function mergeLists(fHead, sHead)
{
    let fNode = fHead;
    let sNode = sHead;
    let current = null;
    let mergeHead = null;

    if (fHead.value < sHead.value) {
        current = mergeHead = fHead;
        fNode = fNode.next;
    } else {
        current = mergeHead = sHead;
        sNode = sNode.next;
    }

    while (current !== null) {

        if (fNode === null) {
            current.next = sNode;
            break;
        }

        if (sNode === null) {
            current.next = fNode;
            break;
        }

        if (fNode.value < sNode.value) {

            current.next = fNode;
            fNode = fNode.next;

        } else if (fNode.value >= sNode.value) {

            current.next = sNode;
            sNode = sNode.next;
        }

        current = current.next;
    }

    return mergeHead;
}

let fHead = new ListNode(0, new ListNode(20, new ListNode(100, null)));
let sHead = new ListNode(-1, new ListNode(3, new ListNode(105, null)));

let mergedHead = mergeLists(fHead, sHead);

new LinkedList().printList(mergedHead);