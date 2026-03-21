const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
let grid = [];
for (let i = 1; i <= n; i++) {
  grid.push(input[i].trim().split(" ").map(Number));
}

const [r, c, m1, m2, m3, m4, dir] = input[n + 1].split(" ").map(Number);

// Please Write your code here.
const board = structuredClone(grid);

let [cy, cx] = [r - 1, c - 1];

let dy, dx, moves;

if (dir === 0) {
  dx = [1, -1, -1, 1];
  dy = [-1, -1, 1, 1];
  moves = [m1, m2, m1, m2];
} else {
  dx = [-1, 1, 1, -1];
  dy = [-1, -1, 1, 1];
  moves = [m2, m1, m2, m1];
}

for (let d = 0; d < 4; d++) {
  const m = moves[d];
  for (let i = 0; i < m; i++) {
    const [ny, nx] = [cy + dy[d], cx + dx[d]];
    board[ny][nx] = grid[cy][cx];

    cy = ny;
    cx = nx;
  }
}

for (let i = 0; i < n; i++) {
  console.log(board[i].join(" "));
}
