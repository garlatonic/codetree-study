const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);
// Please Write your code here.

let length = 1;
let maxLength = 1;

for (let i = 1; i < n; i++) {
    // 이전 원소보다 더 클 경우만
    if (arr[i] > arr[i - 1]) {
        length++;
    } else {
        maxLength = Math.max(maxLength, length);
        length = 1;
    }
}

// 끝나고 한번 더
maxLength = Math.max(maxLength, length);

console.log(maxLength)