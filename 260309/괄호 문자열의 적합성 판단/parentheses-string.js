const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const bracketStr = input[0];
// Please write your code here.
const result = [];

for (const str of bracketStr) {
    if (str === "(") {
        result.push("(")
    } else {
        if (result.length === 0) break;
        result.pop();
    }
}

console.log(result.length > 0 ? "No" : "Yes")