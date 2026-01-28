const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.
const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];

// 초기 위치 세팅
let x = 0, y = 0;
// 현재 방향 (0: 아래로(행 증가), 1: 오른쪽으로(열 증가), 2: 위로(행 감소), 3: )
let dir = 0;

// 값 넣을 grid
const grid = Array.from({ length: n }, () => Array(m).fill(0));
grid[0][0] = 1;

for (let i = 2; i <= n * m; i++) {
    let nx = x + dx[dir];
    let ny = y + dy[dir];

    if (!isRange(nx, ny) || grid[ny][nx] !== 0) {
        dir = (dir + 1) % 4;
        nx = x + dx[dir];
        ny = y + dy[dir];
    }

    x = nx;
    y = ny;

    grid[y][x] = i;
}

grid.forEach((row) => {
    const answer = row.join(" ");
    console.log(answer)
})

// 좌표 내에 있는지
function isRange(x, y) {
    return 0 <= x && x < m && 0 <= y && y < n;
}