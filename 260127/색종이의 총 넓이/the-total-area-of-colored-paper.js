const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
const OFFSET = 100;
const MAX_R = 201;

const area = Array.from({ length: MAX_R }, () => Array(MAX_R).fill(0));

for (const rect of rects) {
    let [x1, y1, x2, y2] = [...rect, rect[0] + 8, rect[1] + 8];

    x1 += OFFSET;
    y1 += OFFSET;
    x2 += OFFSET;
    y2 += OFFSET;

    for (let y = y1; y < y2; y++) {
        for (let x = x1; x < x2; x++) {
            area[y][x] = 1;
        }
    }
}

console.log(area.flat().filter((el) => el > 0).length);