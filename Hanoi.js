import {Stack} from "./Stack.js";

function hanoiTower(fromTwrIndex, toTwrIndex, amount)
{
    const pivotTwrIndex = 6 - fromTwrIndex - toTwrIndex;

    const fromTower = towers[fromTwrIndex];
    const toTower = towers[toTwrIndex];

    if(amount === 1) {
        toTower.push(fromTower.pop());
    }else if(amount > 1){
        hanoiTower(fromTwrIndex, pivotTwrIndex, amount - 1);
        toTower.push(fromTower.pop());
        hanoiTower(pivotTwrIndex, toTwrIndex, amount - 1);
    }
}

const towers = {
    1 : new Stack(),
    2 : new Stack(),
    3 : new Stack()
}

towers[1].push(5);
towers[1].push(4);
towers[1].push(3);
towers[1].push(2);
towers[1].push(1);

hanoiTower(1, 2, towers[1].count());

towers[2].printList();