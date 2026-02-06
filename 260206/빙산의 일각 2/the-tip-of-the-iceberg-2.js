const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const h = input.slice(1, 1 + n).map(Number);

// Please Write your code here.
let maxCount = 0;
for (let i = 1; i <= 1000; i++) {
    let isConnected = false;
    let count = 1;

    for (let j = 1; j < n; j++) {
        const prev = h[j - 1];
        const curr = h[j];

        if (prev > i && curr > i) {
            isConnected = true;
        } else if (prev > i && curr <= i) {
            isConnected = false;
            count++;
        }
    }

    maxCount = Math.max(maxCount, count)
}

console.log(maxCount)