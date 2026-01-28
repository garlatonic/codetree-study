const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

const grid = Array.from({ length: n }, () => Array(n).fill(0));

// 중앙 좌표
let x = Math.floor(n / 2);
let y = Math.floor(n / 2);
grid[y][x] = 1;

let dir = 0;

let stepSize = 1;
let stepCount = 0;
let directionChange = 0;

for (let i = 2; i <= n * n; i++) {
    let ny = y + dy[dir];
    let nx = x + dx[dir];

    stepCount++;

    if (stepCount === stepSize) {
        stepCount = 0;
        directionChange++;

        dir = (dir + 1) % 4;

        if(directionChange % 2 === 0) stepSize++;
    }

    x = nx;
    y = ny;
    grid[y][x] = i;
}

grid.forEach((row) => {
    console.log(row.join(" "));
})