const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let minDiff = Infinity;
let similarSum = 0;
for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
        const filtered = arr.filter((_, index) => index !== i && index !== j);
        const sum = filtered.reduce((acc, cur) => acc + cur, 0);

        if (Math.abs(s - sum) < minDiff) {
            minDiff = Math.abs(s - sum);
            similarSum = sum;
        }
    }
}

console.log(minDiff)