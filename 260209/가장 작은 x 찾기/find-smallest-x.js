const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const conditions = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please write your code here.
let minX = Infinity;
for (let i = 1; i <= 10000; i++) {
    let x = i;
    let isPossible = true;

    for (let j = 0; j < n; j++) {
        const [a, b] = conditions[j];
        x = x * 2;
        if (a <= x && x <= b) continue;
        else {
            isPossible = false;
            break;
        }
    }

    if (isPossible) minX = Math.min(minX, i);
}

console.log(minX)