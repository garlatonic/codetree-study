const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let count = 0;

for (let y = 0; y < n; y++) {
    let colCount = 0;
    for (let x = 0; x < n; x++) {
        for (let dirNum = 0; dirNum < 4; dirNum++) {
            let nx = x + dx[dirNum], ny = y + dy[dirNum];
            if (inRange(nx, ny) && grid[ny][nx] === 1) {
                colCount++;
            }
        }
    }
    if (colCount > 2) count++;
}

function inRange(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n
}

console.log(count)