const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const bracketStr = input[0];
// Please write your code here.
const stack = [];
let isValid = true;

for (const ch of bracketStr) {
    if (ch === "(") {
        stack.push("(");
    } else {
        if (stack.length === 0) {
            isValid = false;
            break;
        }
        stack.pop();
    }
}

if (stack.length !== 0) {
    isValid = false;
}

console.log(isValid ? "Yes" : "No");