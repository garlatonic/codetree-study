const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
// Please Write your code here.

const grid = Array.from({ length: n }, () => Array(m).fill(0));

// 0: 오 / 1: 아 / 2: 왼 / 3: 위
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

let [x, y] = [0, 0];

function isRange(x, y) {
    return 0 <= x && x < m && 0 <= y && y < n;
}

let dir = 0;
grid[0][0] = 1;

for (let i = 2; i <= n * m; i++) {
    let nx = x + dx[dir];
    let ny = y + dy[dir];

    // 영역 밖이거나 이미 채워져 있을 경우 회전
    if (!isRange(nx, ny) || grid[ny][nx] !== 0) {
        dir = (dir + 1) % 4;
    }

    x += dx[dir];
    y += dy[dir];

    grid[y][x] = i;
}

for (let i = 0; i < n; i++) {
    console.log(grid[i].join(" "));
}