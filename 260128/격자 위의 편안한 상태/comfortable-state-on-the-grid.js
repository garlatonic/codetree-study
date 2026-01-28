const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const moves = [];
for (let i = 1; i <= m; i++) {
    moves.push(input[i].split(" ").map(Number));
}

// Please Write your code here.
const grid = Array.from({ length: n }, () => Array(n).fill(0));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

function isRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

for (const move of moves) {
    let [y, x] = move;

    y -= 1;
    x -= 1;

    grid[y][x] = 1;

    let colorCount = 0;
    for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (isRange(nx, ny) && grid[ny][nx] !== 0) {
            colorCount++;
        }
    }

    if (colorCount === 3) console.log(1);
    else console.log(0);
}