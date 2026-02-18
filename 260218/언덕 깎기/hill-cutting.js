const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const hills = [];

for (let i = 1; i <= n; i++) {
    hills.push(Number(input[i]));
}

// Please Write your code here.
let minCosts = Infinity;
for (let i = 0; i <= 100; i++) {
    // i는 가장 낮은 언덕 높이
    let costs = 0;

    for (let j = 0; j < n; j++) {
        if (hills[j] - i <= 17 && hills[j] >= i) continue;

        let x = hills[j] - (i + 17)
        if (hills[j] < i) x = i - hills[j];

        costs = costs + (x * x);
    }

    minCosts = Math.min(minCosts, costs);
}

console.log(minCosts)