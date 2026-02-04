const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, b] = input[0].split(' ').map(Number);
const p = input.slice(1, 1 + n).map(Number);

// Please Write your code here.
let maxCount = 0;
for (let i = 0; i < n; i++) {
    // i번째 선물을 반값으로
    const halfPrice = p[i] / 2;

    const others = [];
    for (let j = 0; j < n; j++) {
        if (i !== j) others.push(p[j]);
    }

    others.push(halfPrice);
    others.sort((a, b) => a - b);

    let sum = 0;
    let count = 0;
    for (let j = 0; j < n; j++) {
        if (sum + others[j] > b) break;
        else {
            sum += others[j];
            count++;
        }
    }

    maxCount = Math.max(count, maxCount);
}

console.log(maxCount)