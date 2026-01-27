const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let length = 1, maxLength = 1;

for (let i = 1; i < n; i++) {
    if (arr[i] > t && arr[i - 1] > t) {
        length++;
    } else {
        maxLength = Math.max(maxLength, length);
        length = 1;
    }
}

maxLength = Math.max(maxLength, length);

console.log(maxLength);