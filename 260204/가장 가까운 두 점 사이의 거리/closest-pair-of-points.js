const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
let minDist = Infinity;

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        const dx = points[i][0] - points[j][0];
        const dy = points[i][1] - points[j][1];

        const dist = dx * dx + dy * dy;
        minDist = Math.min(dist, minDist);
    }
}

console.log(minDist)