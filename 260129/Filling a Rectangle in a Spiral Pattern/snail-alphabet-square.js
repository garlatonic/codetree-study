const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
// Please Write your code here.

const alpaA = "A".charCodeAt();
const alpaZ = "Z".charCodeAt();

const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];
let dir = 0;

const grid = Array.from({ length: n }, () => Array(m).fill(""));
grid[0][0] = "A";

const isRange = (x, y) => {
    return 0 <= x && x < m && 0 <= y && y < n;
}

let x = 0, y = 0;
let curAlpa = alpaA;

for (let i = 2; i <= n * m; i++) {
    let nx = x + dx[dir];
    let ny = y + dy[dir];

    if (!isRange(nx, ny) || grid[ny][nx] !== "") {
        dir = (dir + 1) % 4;
        nx = x + dx[dir];
        ny = y + dy[dir];
    }

    x = nx;
    y = ny;

    curAlpa += 1;
    if (curAlpa > alpaZ) {
        curAlpa = alpaA;
    }
    grid[y][x] = String.fromCharCode(curAlpa);
}

grid.forEach((row) => {
    console.log(row.join(" "));
})
