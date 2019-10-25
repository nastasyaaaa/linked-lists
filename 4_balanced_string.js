import {Stack} from "./Stack.js";

/*
* “<()>{}{<()>}” - сбалансированная, “{{}{})><” - нет.
*/

function isBalanced(str)
{
    let brackets = {
      '}' : '{',
      ')' : '(',
      '>' : '<'
    };

    let stack = new Stack();
    let balanced = true;

    for(let i = 0; i < str.length; i++) {
        let char = str[i];

        if(char === '{' || char === '(' || char === '<') {
            stack.push(char);

        }else if(char === '}' || char === ')' || char === '>'){
            if(stack.top !== null && stack.top.value === brackets[char]) {
                stack.pop();
            }else{
                balanced = false;
                break;
            }
        }
    }

    if(!stack.isEmpty()) {
        balanced = false;
    }

    return balanced;
}

console.log('<()>{}{<()>}', isBalanced("<()>{}{<()>}"));
console.log('{{{{}{}}', isBalanced("{{{{}{}}"));