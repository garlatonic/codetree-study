const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

// Please Write your code here.
let minDist = Infinity;

for (let i = 0; i < n; i++) {
    // i번째 방에서부터 시작하기
    let moves = 0;

    for (let j = 0; j < n; j++) {
        let next = (i + j) % n;
        moves += arr[next] * j;
    }

    minDist = Math.min(minDist, moves);
}

console.log(minDist)