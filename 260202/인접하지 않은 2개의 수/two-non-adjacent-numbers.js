const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
let maxSum = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if(i - 1 === j || i === j || i + 1 === j) continue;
        maxSum = Math.max(maxSum, arr[i] + arr[j]);
    }
}
console.log(maxSum)