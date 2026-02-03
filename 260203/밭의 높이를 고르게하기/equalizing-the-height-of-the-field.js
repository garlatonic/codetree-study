const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, h, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let minCost = Infinity;
for (let i = 0; i <= n - t; i++) {
    let cost = 0;
    for (let j = i; j < i + t; j++) {
        cost += Math.abs(h - arr[j]);
    }

    minCost = Math.min(minCost, cost);
}

console.log(minCost);