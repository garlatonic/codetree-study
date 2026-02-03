const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let maxSum = 0;
for (let i = 0; i <= n - k; i++) {
    let sum = 0;
    // 연속하여 k개의 수 고르기
    for (let j = 0; j < k; j++) {
        sum += arr[i + j];
    }
    maxSum = Math.max(sum, maxSum);
}

console.log(maxSum)