const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const OFFSET = 100;
const MAX_R = 201;
const area = Array(MAX_R).fill("").map(() => Array(MAX_R).fill(false));

for (const rect of rects) {
    const [x1, y1, x2, y2] = rect;

    for (let y = y1 + OFFSET; y < y2 + OFFSET; y++) {
        for (let x = x1 + OFFSET; x < x2 + OFFSET; x++) {
            area[y][x] = 1;
        }
    }
}

console.log(area.flat().filter((el) => el).length);