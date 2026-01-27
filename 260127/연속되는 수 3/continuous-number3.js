const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.
let length = 1;
let maxLength = 1;

for (let i = 1; i < n; i++) {
    if (arr[i].toString().length > 1 === arr[i - 1].toString().length > 1) {
        length++;
    } else {
        maxLength = Math.max(length, maxLength);
        length = 1;
    }
}

maxLength = Math.max(length, maxLength);

console.log(maxLength)