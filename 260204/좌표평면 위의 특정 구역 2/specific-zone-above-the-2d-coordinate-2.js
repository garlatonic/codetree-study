const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const points = input.slice(0, n).map(line => line.split(' ').map(Number));

// Please Write your code here.
let minArea = Infinity;

for (let i = 0; i < n; i++) {
    let x1 = Infinity, x2 = -Infinity;
    let y1 = Infinity, y2 = -Infinity;

    for (let j = 0; j < n; j++) {
        if (i === j) continue;

        x1 = Math.min(x1, points[j][0]);
        x2 = Math.max(x2, points[j][0]);
        y1 = Math.min(y1, points[j][1]);
        y2 = Math.max(y2, points[j][1]);
    }

    minArea = Math.min(minArea, (x2 - x1) * (y2 - y1));
}

console.log(minArea)