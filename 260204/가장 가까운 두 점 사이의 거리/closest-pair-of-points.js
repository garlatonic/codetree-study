const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
let minDiff = Infinity;
for (let i = 0; i < n; i++) {
    let x1 = points[i][0], x2 = Infinity;
    let y1 = points[i][1], y2 = Infinity;

    for (let j = 0; j < n; j++) {
        if (i === j) continue;

        x2 = Math.min(points[j][0]);
        y2 = Math.min(points[j][1]);
    }

    minDiff = Math.min(minDiff, (x1 - x2) ** 2 + (y1 - y2) ** 2);
}

console.log(minDiff)