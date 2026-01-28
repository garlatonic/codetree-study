const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let minDistance;

for (let i = 0; i < n; i++) {
    // i번째 집에 모이기
    const move = arr.map((val, idx) => Math.abs(idx - i) * val);
    const sum = move.reduce((acc, cur) => acc += cur, 0);

    if (!minDistance) minDistance = sum;
    else minDistance = Math.min(minDistance, sum);
}

console.log(minDistance)