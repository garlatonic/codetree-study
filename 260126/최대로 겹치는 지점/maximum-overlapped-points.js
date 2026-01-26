const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

// Please Write your code here.
const MAX_OFFSET = 100;
const arr = Array(MAX_OFFSET).fill(0);

for (const segment of segments) {
    const [s, e] = segment;

    for (let i = s - 1; i < e; i++) {
        arr[i]++;
    }
}

console.log(Math.max(...arr))